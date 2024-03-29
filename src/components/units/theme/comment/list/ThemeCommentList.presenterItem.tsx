import { getDateBefore } from "../../../../commons/getDate";
import * as S from "./ThemeCommentList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import ThemeCommentWrite from "../write/ThemeCommentWrite.container";
import { ReactNode, useState } from "react";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { useMutation } from "@apollo/client";
import {
  DELETE_THEME_REVIEW,
  FETCH_THEME_REVIEWS,
} from "./ThemeCommentList.queries";
import { useRouter } from "next/router";
import { IThemeCommentListUIItemProps } from "./ThemeCommentList.types";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";

export default function ThemeCommentListUIItem(
  props: IThemeCommentListUIItemProps
) {
  const [userInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const [deleteThemeReview] = useMutation(DELETE_THEME_REVIEW);

  const customIcons: Record<number, ReactNode> = {
    1: <FrownOutlined style={{ fontSize: "4em", color: "#e85757" }} />,
    2: <FrownOutlined style={{ fontSize: "4em", color: "#e8b557" }} />,
    3: <MehOutlined style={{ fontSize: "4em", color: "#b3e857" }} />,
    4: <SmileOutlined style={{ fontSize: "4em", color: "#578ce8" }} />,
    5: <SmileOutlined style={{ fontSize: "4em", color: "#7457E8" }} />,
  };

  const [isEdit, setIsEdit] = useState(false);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickDelete = async () => {
    try {
      await deleteThemeReview({
        variables: {
          themeReviewId: props.el?.id,
        },
        refetchQueries: [
          {
            query: FETCH_THEME_REVIEWS,
            variables: { themeId: router.query.id },
          },
        ],
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: (error as Error).message,
        backdrop: false,
      });
    }
  };

  const onClickOpenDeleteModal = () => {
    Swal.fire({
      icon: "question",
      title: "정말 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "네",
      cancelButtonText: "생각 좀 해보고요",
      reverseButtons: true,
      backdrop: false,
    }).then((result) => {
      if (result.isConfirmed) {
        onClickDelete();

        Swal.fire({
          icon: "success",
          title: "리뷰가 삭제되었습니다!",
          timer: 500,
          showConfirmButton: false,
          backdrop: false,
        });
      }
    });
  };
  return isEdit ? (
    <>
      <ThemeCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
    </>
  ) : (
    <S.Comment>
      <S.CommentLeftBox>
        {/* <S.WriterImage /> */}
        {customIcons[props.el?.star]}
      </S.CommentLeftBox>
      <S.CommentRightBox>
        <S.NameToolBox>
          <S.WriterName>{props.el?.user.name}</S.WriterName>
          {userInfo.id === props.el?.user.id && (
            <S.ToolBox>
              <FontAwesomeIcon
                icon={faPen}
                onClick={onClickUpdate}
                style={{
                  fontSize: "1.1em",
                  margin: "4px",
                  cursor: "pointer",
                }}
              />
              <FontAwesomeIcon
                icon={faXmark}
                onClick={onClickOpenDeleteModal}
                style={{ fontSize: "1.5em", margin: "4px", cursor: "pointer" }}
              />
            </S.ToolBox>
          )}
        </S.NameToolBox>

        <S.CreatedAt>{getDateBefore(props.el?.createdAt)}</S.CreatedAt>
        <S.EscapeRankBox>
          <S.EscapeButton>{props.el?.clear ? "탈출" : "미탈출"}</S.EscapeButton>
          <S.RankButton>난이도 : {props.el?.rank}</S.RankButton>
          <S.Star></S.Star>
        </S.EscapeRankBox>
        <S.Contents>{props.el?.content}</S.Contents>
      </S.CommentRightBox>
    </S.Comment>
  );
}
