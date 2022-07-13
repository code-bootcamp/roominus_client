import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import CommunityNewUI from "./CommunityNew.presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { createRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./CommunityNew.queries";

const schema = yup.object({
  title: yup.string().required("제목은 필수 입력 사항입니다."),
  content: yup.string().required("내용은 필수 입력 사항입니다."),
});

export default function CommunityNew() {
  const router = useRouter();

  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);
  const [imageUrl, setImageUrl] = useState(""); //썸네일 미리보기 url
  const [fileUrl, setFileUrl] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const editorRef = createRef();

  const onChangeContent = () => {
    const inputs = editorRef.current.getInstance().getHTML();
    setValue("content", inputs);
    trigger("content");
  };

  const onClickList = () => {
    router.push("/community");
  };

  const onClickSubmit = async (data) => {
    console.log(tagList);
    const result = await createBoard({
      variables: {
        createBoardInput: {
          title: data.title,
          content: data.content,
          boardTags: tagList,
          mainImg: fileUrl,
        },
      },
    });
    console.log(result);
    // router.push("/community/_id");
  };

  return (
    <CommunityNewUI
      onClickList={onClickList}
      onClickSubmit={onClickSubmit}
      editorRef={editorRef}
      onChangeContent={onChangeContent}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      tagItem={tagItem}
      setTagItem={setTagItem}
      tagList={tagList}
      setTagList={setTagList}
      setImageUrl={setImageUrl}
      imageUrl={imageUrl}
      setFileUrl={setFileUrl}
    />
  );
}
