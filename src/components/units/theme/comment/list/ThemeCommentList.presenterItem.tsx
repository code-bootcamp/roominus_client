import { getDateTime } from "../../../../commons/getDate";
import * as S from "./ThemeCommentList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import ThemeCommentWrite from "../write/ThemeCommentWrite.container";
import { useState } from "react";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import Swal from "sweetalert2";
import { useMutation } from "@apollo/client";
import {
  DELETE_THEME_REVIEW,
  FETCH_THEME_REVIEWS,
} from "./ThemeCommentList.queries";
import { useRouter } from "next/router";

export default function ThemeCommentListUIItem(props) {
  const router = useRouter();
  const [deleteThemeReview] = useMutation(DELETE_THEME_REVIEW);

  const customIcons: Record<number, React.ReactNode> = {
    1: <FrownOutlined style={{ fontSize: "2.5em", color: "#e85757" }} />,
    2: <FrownOutlined style={{ fontSize: "2.5em", color: "#e8b557" }} />,
    3: <MehOutlined style={{ fontSize: "2.5em", color: "#b3e857" }} />,
    4: <SmileOutlined style={{ fontSize: "2.5em", color: "#578ce8" }} />,
    5: <SmileOutlined style={{ fontSize: "2.5em", color: "#7457E8" }} />,
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
        text: error.message,
      });
    }
  };

  const onClickOpenDeleteModal = () => {
    Swal.fire({
      title: "삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonColor: "#843dca",
      cancelButtonColor: "#ff6262",
      confirmButtonText: "네!",
      cancelButtonText: "고민 좀 하고요.",
    }).then((result) => {
      if (result.isConfirmed) {
        onClickDelete();
        Swal.fire("삭제되었습니다!", "당신의 댓글은 삭제되었다.");
      }
    });
  };
  console.log(props.el);
  return isEdit ? (
    <>
      <ThemeCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
    </>
  ) : (
    <S.Comment>
      <S.CommentLeftBox>
        <S.WriterImage />
      </S.CommentLeftBox>
      <S.CommentRightBox>
        <S.NameToolBox>
          <S.WriterName>{props.el?.user.name}</S.WriterName>
          <S.ToolBox>
            <FontAwesomeIcon
              icon={faPen}
              onClick={onClickUpdate}
              style={{ fontSize: "0.9em", margin: "2px" }}
            />
            <FontAwesomeIcon
              icon={faXmark}
              onClick={onClickOpenDeleteModal}
              style={{ fontSize: "1.2em", margin: "2px" }}
            />
          </S.ToolBox>
        </S.NameToolBox>

        <S.CreatedAt>{getDateTime(props.el?.createdAt)}</S.CreatedAt>
        <S.EscapeRankBox>
          <S.EscapeButton>{props.el?.clear ? "탈출" : "미탈출"}</S.EscapeButton>
          <S.RankButton>난이도 : {props.el?.rank}</S.RankButton>
          <S.Star>
            {/* <Rate
            style={{ fontSize: "35px", color: "#7457E8" }}
            defaultValue={props.el?.star}
            character={({ index }: { index: number }) => customIcons[index + 1]}
          /> */}
            {customIcons[props.el?.star]}
          </S.Star>
        </S.EscapeRankBox>
        <S.Contents>
          {props.el?.content}
          {/* 머무 재밌멌머묘. 다믐메 또 몰게묘! 다른 테마들도 궁금해묘! 후속작
          내주세묘! 머무 재밌멌머묘. 다믐메 또 몰게묘! 다른 테마들도 궁금해묘!
          후속작 내주세묘! 머무 재밌멌머묘. 다믐메 또 몰게묘! 다른 테마들도
          궁금해묘! 후속작 내주세묘! */}
        </S.Contents>
      </S.CommentRightBox>
    </S.Comment>
  );
}
