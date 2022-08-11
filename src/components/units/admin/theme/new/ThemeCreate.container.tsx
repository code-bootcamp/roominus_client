import ThemeCreateUI from "./ThemeCreate.presenter";
import { CREATE_THEME, UPDATE_THEME, FETCH_THEME } from "./ThemeCreate.queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import {
  ICreateThemeData,
  IThemeCreateProps,
  IUpdateThemeInput,
} from "./ThemeCreate.types";

export default function ThemeCreate(props: IThemeCreateProps) {
  const [createThemegql] = useMutation(CREATE_THEME);
  const [updateThemegql] = useMutation(UPDATE_THEME);
  const router = useRouter();
  const imgRef = useRef<HTMLInputElement>(null);
  const [imgurl, setImgurl] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = useState(0);

  const onClickRealInput = () => {
    imgRef.current?.click();
  };

  const onSubmitCreateTheme = async (data: ICreateThemeData) => {
    try {
      const result = await createThemegql({
        variables: {
          cafeName: data.cafeName,
          genreName: data.genreName,
          createThemeInput: {
            title: data.title,
            rank: value,
            intro_title: data.intro_title,
            intro_content: data.intro_content,
            mainImg: imgurl,
            subImgs: [imgurl],
            agelimit: Number(data.agelimit),
            peoplelimit: Number(data.peoplelimit),
            clearTime: String(data.clearTime),
          },
        },
      });
      reset();
      router.push(`/admin/theme/${result.data.createTheme.id}`);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "error",
        text: (error as Error).message,
        backdrop: false,
      });
    }
  };
  const onSubmitUpdateTheme = async (data: ICreateThemeData) => {
    const updateThemeInput: IUpdateThemeInput = {};
    if (data.title) updateThemeInput.title = data.title;
    if (value) updateThemeInput.rank = value;
    if (data.intro_title) updateThemeInput.intro_title = data.intro_title;
    if (data.intro_content) updateThemeInput.intro_content = data.intro_content;
    if (data.agelimit) updateThemeInput.agelimit = Number(data.agelimit);
    if (data.peoplelimit)
      updateThemeInput.peoplelimit = Number(data.peoplelimit);
    if (data.clearTime) updateThemeInput.clearTime = data.clearTime;
    if (imgurl) updateThemeInput.mainImg = imgurl;
    try {
      await updateThemegql({
        variables: {
          themeId: router.query.id,
          updateThemeInput,
        },
        refetchQueries: [
          {
            query: FETCH_THEME,
            variables: {
              themeId: router.query.id,
            },
          },
        ],
      });
      router.push(`/admin/theme/${router.query.id}`);
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "error",
        text: error.message,
        backdrop: false,
      });
    }
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

  useEffect(() => {
    if (props.themeUpdateData?.fetchTheme.mainImg) {
      setImgurl(props.themeUpdateData.fetchTheme.mainImg);
    }
  }, [props.themeUpdateData]);
  return (
    <ThemeCreateUI
      onSubmitCreateTheme={onSubmitCreateTheme}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
      value={value}
      onChangeFile={onChangeFile}
      imgurl={imgurl}
      imgRef={imgRef}
      onClickRealInput={onClickRealInput}
      isEdit={props.isEdit}
      themeUpdateData={props.themeUpdateData}
      onSubmitUpdateTheme={onSubmitUpdateTheme}
    />
  );
}
