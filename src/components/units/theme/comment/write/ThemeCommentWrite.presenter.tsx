import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import * as S from "./ThemeCommentWrite.styles";
import RadioGroupRating from "./Rate";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import type { RadioChangeEvent } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

export default function ThemeCommentWriteUI(props) {
  const desc = ["너무해요", "왜요", "더 줘요", "좋아요", "와우❤️‍🔥"];

  const [isEscape, setIsEscape] = useState(false);
  const [rank, setRank] = useState();
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    // defaultValues: {
    //   writer: props.boardData?.fetchBoard.writer,
    //   title: props.boardData?.fetchBoard.title,
    //   contents: props.boardData?.fetchBoard.contents,
    // },
    //   resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const customIcons: Record<number, React.ReactNode> = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  const onClickEscape0 = () => {
    setIsEscape(true);
    setValue("clear", true);
    trigger("clear");
  };

  const onClickEscape1 = () => {
    setIsEscape(false);
    setValue("clear", false);
    trigger("clear");
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
    setRank(e.target.value);
    setValue("rank", e.target.value);
    console.log("rank", rank);
  };

  const onChangeStar = (event) => {
    setValue("star", Number(event));
    trigger("star");
  };

  useEffect(() => {
    setValue("clear", Boolean(props.data?.fetchTheme?.clear));
    setValue("rank", props.data?.fetchUseditem?.rank);
    setValue("star", Number(props.data?.fetchUseditem?.star));
  }, []);

  return (
    <form
      onSubmit={
        props.isEdit
          ? handleSubmit(props.onClickUpdate)
          : handleSubmit(props.onClickSubmit)
      }
    >
      <S.Wrapper>
        <S.StarBox>
          <S.StarScore
            tooltips={desc}
            style={{ fontSize: "35px", color: "#7457E8" }}
            defaultValue={4}
            character={({ index }: { index: number }) => customIcons[index + 1]}
            onChange={onChangeStar}
          />
        </S.StarBox>
        <S.EscapeRankBox>
          <S.RadioGroup color="secondary">
            <S.RadioButton
              onClick={onClickEscape0}
              checked={isEscape === true}
              id="escape0"
              // value={true}
            >
              탈출
            </S.RadioButton>
            <S.RadioButton
              onClick={onClickEscape1}
              checked={isEscape === false}
              id="escape1"
              // value={false}
            >
              미탈출
            </S.RadioButton>
          </S.RadioGroup>
          <S.RankBox>
            <S.RadioGroup
              color="secondary"
              onChange={onChange}
              {...register("rank")}
              defaultValue={props.el?.rank}
            >
              <S.RadioButton
                onClick={onChange}
                selected={rank === "쉬움"}
                value="쉬움"
              >
                쉬움
              </S.RadioButton>
              <S.RadioButton
                onClick={onChange}
                selected={rank === "보통"}
                value="보통"
              >
                보통
              </S.RadioButton>
              <S.RadioButton
                onClick={onChange}
                selected={rank === "어려움"}
                value="어려움"
              >
                어려움
              </S.RadioButton>
              <S.RadioButton
                onClick={onChange}
                selected={rank === "매우 어려움"}
                value="매우 어려움"
              >
                매우 어려움
              </S.RadioButton>
            </S.RadioGroup>
          </S.RankBox>
        </S.EscapeRankBox>
        <S.CommentBox>
          <S.CommentWriter>신만*님</S.CommentWriter>
          <S.CommentInput
            defaultValue={props.el?.content}
            {...register("content")}
            placeholder="댓글을 입력하세요."
          />
          <S.SubmitButton>{props.isEdit ? "수정" : "등록"}</S.SubmitButton>
        </S.CommentBox>
      </S.Wrapper>
    </form>
  );
}
