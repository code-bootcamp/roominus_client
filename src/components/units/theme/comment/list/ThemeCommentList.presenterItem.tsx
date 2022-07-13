import { getDateTime } from "../../../../commons/getDate";
import * as S from "./ThemeCommentList.styles";

export default function ThemeCommentListUIItem(props) {
  console.log(props.el);
  return (
    <S.Comment>
      <S.CommentLeftBox>
        <S.WriterImage />
      </S.CommentLeftBox>
      <S.CommentRightBox>
        <S.WriterName>{props.el?.user.name}</S.WriterName>
        <S.Star>
          <img src="/img/theme/별점.png" />
          <img src="/img/theme/별점.png" />
          <img src="/img/theme/별점.png" />
          <img src="/img/theme/별점.png" />
          <img src="/img/theme/별점.png" />
        </S.Star>
        <S.CreatedAt>{getDateTime(props.el?.createdAt)}</S.CreatedAt>
        <S.EscapeRankBox>
          <S.EscapeButton>{props.el?.clear ? "탈출" : "미탈출"}</S.EscapeButton>
          <S.RankButton>난이도 : {props.el?.rank}</S.RankButton>
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
