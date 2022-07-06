import ThemeCommentListUIItem from "./ThemeCommentList.presenterItem";
import * as S from "./ThemeCommentList.styles";

export default function ThemeCommentListUI() {
  return (
    <S.Wrapper>
      <ThemeCommentListUIItem />
      <ThemeCommentListUIItem />
      <ThemeCommentListUIItem />
    </S.Wrapper>
  );
}
