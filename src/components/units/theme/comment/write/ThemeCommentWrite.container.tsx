import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ThemeCommentWriteUI from "./ThemeCommentWrite.presenter";
import {
  CREATE_THEME_REVIEW,
  FETCH_THEME_REVIEWS,
  UPDATE_THEME_REVIEW,
} from "./ThemeCommentWrite.queries";
import { IUpdateThemeReviewInput } from "./ThemeCommentWriter.types";

export default function ThemeCommentWrite(props) {
  const router = useRouter();

  const [createThemeReview] = useMutation(CREATE_THEME_REVIEW);
  const [updateThemeReview] = useMutation(UPDATE_THEME_REVIEW);

  const [isEscape, setIsEscape] = useState("");

  const { register, handleSubmit, formState, setValue, trigger, reset } =
    useForm({
      // defaultValues: {
      //   writer: props.boardData?.fetchBoard.writer,
      //   title: props.boardData?.fetchBoard.title,
      //   contents: props.boardData?.fetchBoard.contents,
      // },
      //   resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onClickSubmit = async (data) => {
    try {
      const result = await createThemeReview({
        variables: {
          createThemeReviewInput: {
            writerName: "신만두",
            ...data,
          },
          themeId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_THEME_REVIEWS,
            variables: { themeId: router.query.id },
          },
        ],
      });
      reset();
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdate = async (data) => {
    try {
      const updateThemeReviewInput: IUpdateThemeReviewInput = {};
      if (data.content) updateThemeReviewInput.content = data.content;
      if (data.star) updateThemeReviewInput.star = data.star;
      if (data.rank) updateThemeReviewInput.rank = data.rank;
      if (data.clear !== props.el?.clear)
        updateThemeReviewInput.clear = data.clear;

      const result = await updateThemeReview({
        variables: {
          updateThemeReviewInput,
          themeReviewId: props.el?.id,
        },
        refetchQueries: [
          {
            query: FETCH_THEME_REVIEWS,
            variables: { themeId: router.query.id },
          },
        ],
      });
      props?.setIsEdit(false);
      reset();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ThemeCommentWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      setValue={setValue}
      trigger={trigger}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEscape={isEscape}
      isEdit={props.isEdit}
      setIsEdit={props.IsEdit}
      el={props.el}
    />
  );
}
