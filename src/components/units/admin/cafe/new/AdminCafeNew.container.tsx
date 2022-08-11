import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CREATE_CAFE, UPDATE_CAFE } from "./AdminCafeNew.query";
import AdminCafeNewUI from "./AdminCafeNew.presenter";
import Swal from "sweetalert2";
import {
  IAdminCafeNewProps,
  IDataProps,
  IUpdateDataProps,
  IUpdateCafeInput,
} from "./AdminCafeNew.types";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";

export default function AdminCafeNew(props: IAdminCafeNewProps) {
  const router = useRouter();
  const imgRef = useRef<HTMLInputElement>(null);

  const [createCafe] = useMutation(CREATE_CAFE);
  const [updateCafe] = useMutation(UPDATE_CAFE);

  const [userInfo] = useRecoilState(userInfoState);

  const { register, handleSubmit } = useForm();

  const [imgurl, setImgurl] = useState("");

  const onClickRealInput = () => {
    imgRef.current?.click();
  };

  const upload = (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );

    const result = fetch(
      "https://api.cloudinary.com/v1_1/dop5piuwp/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((response) => {
      return response.json();
    });
    return result;
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    upload(file).then((result) => setImgurl(result.url));
  };

  const onClickButton = async (data: IDataProps) => {
    try {
      const result = await createCafe({
        variables: {
          createCafeInput: {
            name: data.name,
            phone: data.phone,
            intro_content: data.intro_content,
            address: data.address,
            address_detail: data.address_detail,
            mainImg: imgurl,
            users: userInfo.name,
            coordinate: 2,
          },
        },
      });
      router.push(`/admin/cafe/${result.data?.createCafe.id}`);
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: (error as Error).message,
        backdrop: false,
      });
    }
  };

  const onClickUpdate = async (data: IUpdateDataProps) => {
    const updateCafeInput: IUpdateCafeInput = {};
    if (data.name) updateCafeInput.name = data.name;
    if (data.phone) updateCafeInput.phone = data.phone;
    if (data.intro_content) updateCafeInput.intro_content = data.intro_content;
    if (data.address) updateCafeInput.address = data.address;
    if (data.address_detail)
      updateCafeInput.address_detail = data.address_detail;
    if (imgurl) updateCafeInput.mainImg = imgurl;
    // if (userInfo.name) updateCafeInput.users = userInfo.name;

    try {
      const result = await updateCafe({
        variables: {
          cafeId: router.query.id,
          updateCafeInput,
        },
      });
      router.push(`/admin/cafe/${result.data?.updateCafe.id}`);
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: (error as Error).message,
        backdrop: false,
      });
    }
  };

  useEffect(() => {
    if (props.editData?.fetchCafe.mainImg) {
      setImgurl(props.editData?.fetchCafe.mainImg);
    }
  }, [props.editData]);

  return (
    <AdminCafeNewUI
      register={register}
      imgurl={imgurl}
      handleSubmit={handleSubmit}
      onClickButton={onClickButton}
      onClickUpdate={onClickUpdate}
      onChangeFile={onChangeFile}
      imgRef={imgRef}
      onClickRealInput={onClickRealInput}
      isEdit={props.isEdit}
      editData={props.editData}
    />
  );
}
