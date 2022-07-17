import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
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
} from "./ThemeCommentWriter.types";

type Comment = {
  content: string;
  star: number;
  clear: boolean;
  rank: string;
};

export default function ThemeCommentWrite(props: IThemeCommentWriteProps) {
  const router = useRouter();

  const [createThemeReview] = useMutation(CREATE_THEME_REVIEW);
  const [updateThemeReview] = useMutation(UPDATE_THEME_REVIEW);

  const { register, handleSubmit, formState, setValue, trigger, reset } =
    useForm<Comment>({
      mode: "onChange",
    });

  const onClickSubmit: SubmitHandler<Comment> = async (data) => {
    if (!data.star) {
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
      alert((error as Error).message);
    }
  };

  const onClickUpdate = async (data: Comment) => {
    try {
      const updateThemeReviewInput: IUpdateThemeReviewInput = {};
      if (data.content) updateThemeReviewInput.content = data.content;
      if (data.star) updateThemeReviewInput.star = data.star;
      if (data.rank) updateThemeReviewInput.rank = data.rank;
      if (data.clear) updateThemeReviewInput.clear = data.clear;

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
      reset();
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
    />
  );
}
