import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import Swal from "sweetalert2";
import { userInfoState } from "../../../../../commons/store";
import ThemeCommentWriteUI from "./ThemeCommentWrite.presenter";
import {
  CREATE_THEME_REVIEW,
  FETCH_RESERVATIONS_USER,
  FETCH_THEME_REVIEWS,
  UPDATE_THEME_REVIEW,
} from "./ThemeCommentWrite.queries";
import {
  IFetchReservationData,
  IFetchThemeReviewsData,
  IThemeCommentWriteProps,
  IUpdateThemeReviewInput,
  IWriteCommentData,
} from "./ThemeCommentWriter.types";

export default function ThemeCommentWrite(props: IThemeCommentWriteProps) {
  const router = useRouter();
  const [isReviewer, setIsReviewer] = useState(true);
  const [userInfo] = useRecoilState(userInfoState);

  const [createThemeReview] = useMutation(CREATE_THEME_REVIEW);
  const [updateThemeReview] = useMutation(UPDATE_THEME_REVIEW);

  const { data } = useQuery(FETCH_RESERVATIONS_USER, {
    variables: {
      page: 1,
    },
  });

  const { data: fetchThemeReviews } = useQuery(FETCH_THEME_REVIEWS, {
    variables: {
      themeId: router.query.id,
    },
  });

  const { register, handleSubmit, formState, setValue, trigger, resetField } =
    useForm({
      mode: "onChange",
    });

  const onClickSubmit = async (data: IWriteCommentData) => {
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
            clear: data.clear,
            rank: data.rank,
            star: data.star,
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
      resetField("star");
      resetField("rank");
      resetField("content");
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const onClickUpdate = async (data: IWriteCommentData) => {
    const updateThemeReviewInput: IUpdateThemeReviewInput = {};
    if (data.content) updateThemeReviewInput.content = data.content;
    if (data.star) updateThemeReviewInput.star = data.star;
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

  useEffect(() => {
    if (
      data?.fetchReservationsUser.filter(
        (ele: IFetchReservationData) =>
          ele.theme_menu.theme?.id === router.query.id
      ).length === 0
    )
      setIsReviewer(false);
    // 예약한 내역이 없으면 댓글 다는 권한 false로 변경

    fetchThemeReviews?.fetchThemeReviews.filter(
      (el: IFetchThemeReviewsData) => el.user.id === userInfo.id
    ).length >= 1
      ? setIsReviewer(false)
      : setIsReviewer(true);

    // 댓글 작성한 적이 있으면 댓글 다는 권한 false로 변경
  }, [fetchThemeReviews?.fetchThemeReviews]);

  return (
    isReviewer && (
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
    )
  );
}
