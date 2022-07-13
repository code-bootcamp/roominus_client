import ThemeCreateUI from "./ThemeCreate.presenter";
import { CREATE_THEME, UPDATE_THEME, FETCH_THEME } from "./ThemeCreate.queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function ThemeCreate(props) {
  const [createThemegql] = useMutation(CREATE_THEME);
  const [updateThemegql] = useMutation(UPDATE_THEME);
  const router = useRouter();
  const imgRef = useRef();
  const [imgurl, setImgurl] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = useState(0);

  console.log(props.ThemeUpdateData);
  const onClickRealInput = () => {
    imgRef.current.click();
  };

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
      router.push(`/admin/theme/detail/${result.data.createTheme.id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onSubmitUpdateTheme = async (data) => {
    const updateThemeInput = {};
    if (data.title) updateThemeInput.title = data.title;
    if (data.rank) updateThemeInput.rank = data.rank;
    if (data.intro_title) updateThemeInput.intro_title = data.intro_title;
    if (data.intro_content) updateThemeInput.intro_content = data.intro_content;
    if (data.agelimit) updateThemeInput.agelimit = Number(data.agelimit);
    if (imgurl) updateThemeInput.mainImg = imgurl;
    if (imgurl) updateThemeInput.subImg = [imgurl];
    try {
      const result = await updateThemegql({
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
      Modal.success({ content: "수정 성공❤️" });
      router.push(`/admin/theme/detail/${result.data.fetchTheme.id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
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
  // useEffect(() => {
  //   reset({
  //     title: props.ThemeUpdateData.fetchTheme.title,
  //     rank: props.ThemeUpdateData.fetchTheme.rank,
  //     intro_title: props.ThemeUpdateData.fetchTheme.intro_title,
  //     intro_content: props.ThemeUpdateData.fetchTheme.intro_content,
  //     agelimit: props.ThemeUpdateData.fetchTheme.agelimit,
  //   });
  // }, [props.ThemeUpdateData]);
  useEffect(() => {
    if (props.ThemeUpdateData?.fetchTheme.mainImg) {
      setImgurl(props.ThemeUpdateData.fetchTheme.mainImg);
    }
  }, [props.ThemeUpdateData]);
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
      ThemeUpdateData={props.ThemeUpdateData}
      onSubmitUpdateTheme={onSubmitUpdateTheme}
    />
  );
}
