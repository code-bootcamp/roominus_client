import * as S from "./ThemeCommentWrite.styles";
import {
  ChangeEvent,
  FormEventHandler,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IThemeCommentWriteUIProps } from "./ThemeCommentWriter.types";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";

export default function ThemeCommentWriteUI(props: IThemeCommentWriteUIProps) {
  const [userInfo] = useRecoilState(userInfoState);

  const desc = [
    "🍂흙길🥀 조금 부족해요!",
    "🌱풀길🌱 아쉬워요!",
    "🌷풀꽃길☘️ 괜찮네요!",
    "🌸꽃길🌼 추천해요!",
    "❤️‍🔥또 해도 좋아❤️‍🔥",
  ];

  const [isEscape, setIsEscape] = useState(false);
  const [rank, setRank] = useState<string>("보통");

  const customIcons: Record<number, ReactNode> = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  const onClickCancel = () => {
    props.setIsEdit(false);
  };

  const onClickEscape0 = () => {
    setIsEscape(true);
    props.setValue("clear", true);
    props.trigger("clear");
  };

  const onClickEscape1 = () => {
    setIsEscape(false);
    props.setValue("clear", false);
    props.trigger("clear");
  };

  const onClickRank: FormEventHandler<HTMLButtonElement> = (
    event: ChangeEvent<HTMLButtonElement>
  ) => {
    setRank(event.target.value);
    props.setValue("rank", event.target.value);
  };

  useEffect(() => {
    if (props.el?.clear) {
      props.setValue("clear", Boolean(props.el?.clear));
      setIsEscape(Boolean(props.el?.clear));
    }
    if (props.el?.rank) {
      props.setValue("rank", props.el?.rank);
      setRank(props.el?.rank);
    }

    // props.setValue("clear", Boolean(props.el?.clear || isEscape));
    // props.setValue("rank", props.el?.rank || rank);
    // setIsEscape(Boolean(props.el?.clear));
    // setRank(props.el?.rank);
  }, []);

  return (
    <S.Wrapper isEdit={props.isEdit}>
      <S.StarBox>
        <S.StarScore
          tooltips={desc}
          style={{ fontSize: "3em", color: "#7457E8" }}
          onChange={props.setStar}
          value={props.star || props.el?.star}
          character={({ index }: { index: number }) => customIcons[index + 1]}
        />
        {props.isEdit ? (
          <FontAwesomeIcon
            icon={faXmark}
            onClick={onClickCancel}
            style={{
              fontSize: "1.5em",
              margin: "4px",
              cursor: "pointer",
              position: "absolute",
              right: "1em",
              color: "#5c4a7e",
            }}
          />
        ) : (
          ""
        )}
      </S.StarBox>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickUpdate)
            : props.handleSubmit(props.onClickSubmit)
        }
      >
        <S.EscapeRankBox>
          <S.RadioGroup color="secondary">
            <S.RadioButton
              onClick={onClickEscape0}
              checked={isEscape === true}
              id="escape0"
            >
              탈출
            </S.RadioButton>
            <S.RadioButton
              onClick={onClickEscape1}
              checked={isEscape === false}
              id="escape1"
            >
              미탈출
            </S.RadioButton>
          </S.RadioGroup>
          <S.RankBox>
            <S.RadioGroup color="secondary" defaultValue={props.el?.rank}>
              <S.RadioButton
                onClick={onClickRank}
                selected={rank === "쉬움"}
                value="쉬움"
              >
                쉬움
              </S.RadioButton>
              <S.RadioButton
                onClick={onClickRank}
                selected={rank === "보통"}
                value="보통"
              >
                보통
              </S.RadioButton>
              <S.RadioButton
                onClick={onClickRank}
                selected={rank === "어려움"}
                value="어려움"
              >
                어려움
              </S.RadioButton>
              <S.RadioButton
                onClick={onClickRank}
                selected={rank === "매우 어려움"}
                value="매우 어려움"
              >
                매우 어려움
              </S.RadioButton>
            </S.RadioGroup>
          </S.RankBox>
        </S.EscapeRankBox>
        <S.CommentBox>
          <S.CommentWriter>{userInfo.name}</S.CommentWriter>
          <S.CommentInput
            defaultValue={props.el?.content}
            {...props.register("content")}
            placeholder="댓글을 입력하세요."
          />
          <S.SubmitButton>{props.isEdit ? "수정" : "등록"}</S.SubmitButton>
        </S.CommentBox>
      </form>
    </S.Wrapper>
  );
}
