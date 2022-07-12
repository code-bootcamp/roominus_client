import WebSmallBlackButton from "../../../../commons/buttons/buttonDesktop/WebSmallBlackButton";
import WebSmallPurpleButton from "../../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import * as S from "./ThemeDetail.styles";

export default function ThemeDetailUI(props) {
  return (
    <S.Wrapper>
      <S.Title>테마 상세페이지(관리자)</S.Title>
      <S.InfoBox>
        <S.Img src={props.ThemeDetail?.fetchTheme.mainImg} alt="No Image" />
        <S.Info>
          <div>테마제목: {props.ThemeDetail?.fetchTheme.title}</div>
          <div>테마서브제목: {props.ThemeDetail?.fetchTheme.intro_title}</div>
          <div>난이도: {props.ThemeDetail?.fetchTheme.rank}</div>
          <div>테마내용: {props.ThemeDetail?.fetchTheme.intro_content}</div>
          <div>연령제한: {props.ThemeDetail?.fetchTheme.agelimit}</div>
          <div>좋아요: {props.ThemeDetail?.fetchTheme.like}</div>
        </S.Info>
      </S.InfoBox>
      <S.ButtonBox>
        <WebSmallBlackButton onClick={props.onClickList} title="목록으로" />
        <WebSmallPurpleButton onClick={props.onClickEdit} title="수정하기" />
        <WebSmallPurpleButton onClick={props.onClickDelete} title="삭제하기" />
      </S.ButtonBox>
    </S.Wrapper>
  );
}
