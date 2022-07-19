import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CREATE_CAFE, UPDATE_CAFE } from "./AdminCafeNew.query";
import AdminCafeNewUI from "./AdminCafeNew.presenter";
import Swal from "sweetalert2";

export default function AdminCafeNew(props) {
  const router = useRouter();
  const imgRef = useRef();

  const [createCafe] = useMutation(CREATE_CAFE);
  const [updateCafe] = useMutation(UPDATE_CAFE);

  const { register, handleSubmit } = useForm();

  const [imgurl, setImgurl] = useState("");

  const onClickRealInput = () => {
    imgRef.current.click();
  };

  const upload = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "tyx7y8ot");

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

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];
    upload(file).then((result) => setImgurl(result.url));
    // upload(file).then((result) => console.log(typeof result.url));
  };

  const onClickButton = async (data) => {
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
            // subImgs: [imgurl],
            users: ["오세웅"],
            coordinate: 2,
          },
        },
      });
      router.push(`/admin/cafe/${result.data?.createCafe.id}`);
      console.log(result.data?.createCafe);
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.message,
      });
    }
  };

  console.log(props.editData);

  interface IUpdateCafeInput {
    name?: string;
    phone?: string;
    intro_content?: string;
    address?: string;
    address_detail?: string;
    mainImg?: string;
  }

  const onClickUpdate = async (data) => {
    const updateCafeInput: IUpdateCafeInput = {};
    if (data.name) updateCafeInput.name = data.name;
    if (data.phone) updateCafeInput.phone = data.phone;
    if (data.intro_content) updateCafeInput.intro_content = data.intro_content;
    if (data.address) updateCafeInput.address = data.address;
    if (data.address_detail)
      updateCafeInput.address_detail = data.address_detail;
    if (imgurl) updateCafeInput.mainImg = imgurl;

    try {
      const result = await updateCafe({
        variables: {
          cafeId: router.query.id,
          updateCafeInput,
          // : {
          //   name: data.name,
          //   phone: data.phone,
          //   intro_content: data.intro_content,
          //   address: data.address,
          //   address_detail: data.address_detail,
          //   mainImg: imgurl,
          // },
        },
      });
      Swal.fire({
        icon: "success",
        title: "수정이 완료되었습니다!",
      });
      router.push(`/admin/cafe/${result.data?.updateCafe.id}`);
      console.log(result);
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.message,
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
