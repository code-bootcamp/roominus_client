import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ThemeCommentWriteUI from "./ThemeCommentWrite.presenter";
import {
  CREATE_THEME_REVIEW,
  FETCH_THEME_REVIEWS,
  UPDATE_THEME_REVIEW,
} from "./ThemeCommentWrite.queries";
import {
  IThemeCommentWriteProps,
  IUpdateThemeReviewInput,
  IWriteCommentData,
} from "./ThemeCommentWriter.types";

export default function ThemeCommentWrite(props: IThemeCommentWriteProps) {
  const router = useRouter();

  const [createThemeReview] = useMutation(CREATE_THEME_REVIEW);
  const [updateThemeReview] = useMutation(UPDATE_THEME_REVIEW);
  const [star, setStar] = useState<number>(0);
  const { register, handleSubmit, formState, setValue, trigger, resetField } =
    useForm({
      mode: "onChange",
    });

  const onClickSubmit = async (data: IWriteCommentData) => {
    if (star === 0) {
      Swal.fire("만족도를 선택해주세요!");
      return;
    }
    if (!data.content) {
      Swal.fire("내용을 입력해주세요!");
      return;
    }
    if (!data.rank) {
      Swal.fire("난이도는 어땠는지 선택해주세요!");
      return;
    }

    try {
      await createThemeReview({
        variables: {
          createThemeReviewInput: {
            clear: data.clear,
            rank: data.rank,
            star,
            content: data.content,
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
      resetField("clear");
      resetField("rank");
      resetField("content");
      setStar(0);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const onClickUpdate = async (data: IWriteCommentData) => {
    const updateThemeReviewInput: IUpdateThemeReviewInput = {};
    if (data.content) updateThemeReviewInput.content = data.content;
    if (star) updateThemeReviewInput.star = star;
    if (data.rank) updateThemeReviewInput.rank = data.rank;
    if (data.clear) updateThemeReviewInput.clear = data.clear;
    try {
      await updateThemeReview({
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
    } catch (error) {
      alert((error as Error).message);
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
      isEdit={props.isEdit}
      setIsEdit={props.setIsEdit}
      el={props.el}
      setStar={setStar}
      star={star}
    />
  );
}
