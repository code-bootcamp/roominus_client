import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import CommunityNewUI from "./CommunityNew.presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { createRef, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./CommunityNew.queries";
import Swal from "sweetalert2";
import { Editor } from "@toast-ui/react-editor";
import {
  ICommunityNewProps,
  IUpdateBoardInput,
  IEditDataProps,
  IEl,
  IDataProps,
} from "./CommunityNew.types";

const schema = yup.object({
  title: yup.string().required("제목은 필수 입력 사항입니다."),
  content: yup.string().required("내용은 필수 입력 사항입니다."),
});

export default function CommunityNew(props: ICommunityNewProps) {
  const router = useRouter();

  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);
  const [imageUrl, setImageUrl] = useState(""); //썸네일 미리보기 url
  const [fileUrl, setFileUrl] = useState(""); //사진등록 url

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const editorRef = createRef<Editor>();

  const onChangeContent = () => {
    const inputs = editorRef.current?.getInstance().getHTML();
    setValue("content", inputs);
    trigger("content");
  };

  const onClickList = () => {
    router.push("/community");
  };

  const onClickSubmit = async (data: IDataProps) => {
    try {
      if (!fileUrl) {
        Swal.fire({
          icon: "warning",
          title: "이미지를 등록해주세요!",
          backdrop: false,
        });
      } else if (fileUrl) {
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
        router.push(`/community/${result.data?.createBoard.id}`);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: (error as Error).message,
        backdrop: false,
      });
    }
  };

  const onClickEdit = async (data: IEditDataProps) => {
    const updateBoardInput: IUpdateBoardInput = {};
    if (data.title) updateBoardInput.title = data.title;
    if (data.content) updateBoardInput.content = data.content;
    if (tagList) updateBoardInput.boardTags = tagList;
    if (fileUrl) updateBoardInput.mainImg = fileUrl;

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.id,
          updateBoardInput,
        },
      });
      router.push(`/community/${result.data?.updateBoard.id}`);
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: (error as Error).message,
        backdrop: false,
      });
    }
  };

  // 태그 수정시 defaultValue
  useEffect(() => {
    if (props.editData?.fetchBoard.boardTags.length)
      setTagList(
        props.editData?.fetchBoard.boardTags.map((el: IEl) => el.title)
      );
  }, [props.editData]);

  // 이미지 수정시 defaultValue
  useEffect(() => {
    if (props.editData?.fetchBoard.mainImg) {
      setImageUrl(props.editData?.fetchBoard.mainImg);
    }
  }, [props.editData]);

  // toastUI defaultValue
  useEffect(() => {
    const html: any = props.editData?.fetchBoard.content;
    editorRef.current?.getInstance().setHTML(html);
  }, [props.editData]);

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
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      editData={props.editData}
    />
  );
}
