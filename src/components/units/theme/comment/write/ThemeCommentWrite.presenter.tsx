import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import * as S from "./ThemeCommentWrite.styles";
import RadioGroupRating from "./Rate";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ThemeCommentWriteUI(props) {
  const [isEscape, setIsEscape] = useState(false);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    // defaultValues: {
    //   writer: props.boardData?.fetchBoard.writer,
    //   title: props.boardData?.fetchBoard.title,
    //   contents: props.boardData?.fetchBoard.contents,
    // },
    //   resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onClickEscape0 = () => {
    setIsEscape(true);
    setValue("clear", isEscape);
    trigger("clear");
  };

  const onClickEscape1 = () => {
    setIsEscape(false);
    setValue("clear", isEscape);
    trigger("clear");
  };

  return (
    <form onSubmit={handleSubmit(props.onClickSubmit)}>
      <S.Wrapper>
        <S.StarBox>
          {/* <img src="/img/theme/별.png" />
        <img src="/img/theme/별.png" />
        <img src="/img/theme/별.png" />
        <img src="/img/theme/별.png" />
        <img src="/img/theme/별.png" /> */}
          <S.Star icon={faStar} />
          <S.Star icon={faStar} />
          <S.Star icon={faStar} />
          <S.Star icon={faStar} />
          <S.Star icon={faStar} />
          {/* <RadioGroupRating /> */}
        </S.StarBox>
        <S.EscapeRankBox>
          <S.IsEscapeBox>
            <S.EscapeLabel>
              <S.EscapeInput alt="탈출" type="radio" />
              <S.EscapeButton
                onClick={onClickEscape0}
                checked={isEscape === true}
                id="escape0"
                // value={true}
              >
                탈출
              </S.EscapeButton>
            </S.EscapeLabel>
            <S.EscapeLabel>
              <S.EscapeInput alt="미탈출" type="radio" />
              <S.EscapeButton
                onClick={onClickEscape1}
                checked={isEscape === false}
                id="escape1"
                // value={false}
              >
                미탈출
              </S.EscapeButton>
            </S.EscapeLabel>
          </S.IsEscapeBox>
          <S.RankBox>
            <S.RankButton
              type="radio"
              value="쉬움"
              {...register("rank")}
            ></S.RankButton>
            <S.RankButton
              type="radio"
              value="보통"
              {...register("rank")}
            ></S.RankButton>
            <S.RankButton
              type="radio"
              value="어려움"
              {...register("rank")}
            ></S.RankButton>
            <S.RankButton
              type="radio"
              value="매우 어려움"
              {...register("rank")}
            ></S.RankButton>
          </S.RankBox>
        </S.EscapeRankBox>
        <S.CommentBox>
          <S.CommentWriter>신만*님</S.CommentWriter>
          <S.CommentInput
            {...register("content")}
            placeholder="댓글을 입력하세요."
          />
          <S.SubmitButton>등록</S.SubmitButton>
        </S.CommentBox>
      </S.Wrapper>
    </form>
  );
}
