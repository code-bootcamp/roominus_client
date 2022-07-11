import ThemeCreateUI from "./ThemeCreate.presenter";
import { CREATE_THEME } from "./ThemeCreate.query";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
export default function ThemeCreate() {
  const [createThemegql] = useMutation(CREATE_THEME);
  const router = useRouter();
  const [imgurl, setImgurl] = useState("");
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState(0);
  const onSubmitCreateTheme = async (data) => {
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
          },
        },
      });
      Modal.success({ content: "테마등록 성공" });
      // router.push(`/admin/theme/detail/${result.data.createTheme.title}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const upload = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hs9vtrg6");

    const result = fetch(
      "https://api.cloudinary.com/v1_1/dgctmlcg6/image/upload",
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
  };

  return (
    <ThemeCreateUI
      onSubmitCreateTheme={onSubmitCreateTheme}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
      value={value}
      onChangeFile={onChangeFile}
      imgurl={imgurl}
    />
  );
}
