import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import * as S from "./ThemeCommentWrite.styles";

export default function ThemeCommentWriteUI() {
  return (
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
      </S.StarBox>
      <S.EscapeRankBox>
        <S.IsEscapeBox>
          <S.EscapeButton>탈출</S.EscapeButton>
          <S.EscapeButton>미탈출</S.EscapeButton>
        </S.IsEscapeBox>
        <S.RankBox>
          <S.RankButton>쉬움</S.RankButton>
          <S.RankButton>보통</S.RankButton>
          <S.RankButton>어려움</S.RankButton>
          <S.RankButton>매우 어려움</S.RankButton>
        </S.RankBox>
      </S.EscapeRankBox>
      <S.CommentBox>
        <S.CommentWriter>신만*님</S.CommentWriter>
        <S.CommentInput placeholder="댓글을 입력하세요." />
        <S.SubmitButton>등록</S.SubmitButton>
      </S.CommentBox>
    </S.Wrapper>
  );
}
