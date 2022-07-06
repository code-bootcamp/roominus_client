import * as S from "./ThemeCommentList.styles";

export default function ThemeCommentListUIItem() {
  return (
    <S.Comment>
      <S.CommentLeftBox>
        <S.WriterImage />
      </S.CommentLeftBox>
      <S.CommentRightBox>
        <S.WriterName>신만*님</S.WriterName>
        <S.Star>
          <img src="/img/theme/별점.png" />
          <img src="/img/theme/별점.png" />
          <img src="/img/theme/별점.png" />
          <img src="/img/theme/별점.png" />
          <img src="/img/theme/별점.png" />
        </S.Star>
        <S.CreatedAt> 2022.07.05 </S.CreatedAt>
        <S.EscapeRankBox>
          <S.EscapeButton>탈출</S.EscapeButton>
          <S.RankButton>난이도 : 보통</S.RankButton>
        </S.EscapeRankBox>
        <S.Contents>
          머무 재밌멌머묘. 다믐메 또 몰게묘! 다른 테마들도 궁금해묘! 후속작
          내주세묘! 머무 재밌멌머묘. 다믐메 또 몰게묘! 다른 테마들도 궁금해묘!
          후속작 내주세묘! 머무 재밌멌머묘. 다믐메 또 몰게묘! 다른 테마들도
          궁금해묘! 후속작 내주세묘!
        </S.Contents>
      </S.CommentRightBox>
    </S.Comment>
  );
}
