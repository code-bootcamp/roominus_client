import WebSmallBlackButton from "../../../../commons/buttons/buttonDesktop/WebSmallBlackButton";
import WebSmallPurpleButton from "../../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import * as S from "./ThemeDetail.styles";
import { IThemeDetailUIProps } from "./ThemeDetail.types";

export default function ThemeDetailUI(props: IThemeDetailUIProps) {
  return (
    <S.Wrapper>
      <S.Title>테마 상세페이지(관리자)</S.Title>
      <S.InfoBox>
        <S.Img src={props.ThemeDetail?.fetchTheme.mainImg} alt="No Image" />
        <S.Info>
          <div>제목: {props.ThemeDetail?.fetchTheme.title}</div>
          <div>부제목: {props.ThemeDetail?.fetchTheme.intro_title}</div>
          <div>내용: {props.ThemeDetail?.fetchTheme.intro_content}</div>
          <div>난이도: {props.ThemeDetail?.fetchTheme.rank}</div>
          <div>나이 제한: {props.ThemeDetail?.fetchTheme.agelimit}</div>
          <div>인원 제한: {props.ThemeDetail?.fetchTheme.peoplelimit}</div>
          <div>이용 시간: {props.ThemeDetail?.fetchTheme.clearTime}</div>
          <div>좋아요: {props.ThemeDetail?.fetchTheme.like}</div>
          <div>매장 : {props.ThemeDetail?.fetchTheme.cafe?.name}</div>
          <div>장르 : {props.ThemeDetail?.fetchTheme.genre?.name}</div>
        </S.Info>
      </S.InfoBox>
      <S.ButtonBox>
        <WebSmallBlackButton onClick={props.onClickList} title="목록으로" />
        <WebSmallPurpleButton
          type="button"
          onClick={props.onClickEdit(props.ThemeDetail?.fetchTheme.id)}
          title="수정하기"
        />
        <WebSmallPurpleButton onClick={props.onClickDelete} title="삭제하기" />
      </S.ButtonBox>
      <button onClick={props.onClickMoveToCreateThemeMenu}>
        테마 메뉴 등록하러 가기
      </button>
    </S.Wrapper>
  );
}
