import * as S from "./ThemeList.styles";
import { Rate } from "antd";
export default function ThemeListItem(props) {
  return (
    <S.ThemeItemWrapper
      onClick={props.onClickMoveToThemeDetail(props.ThemeData.id)}
    >
      <S.ThemeTitleBox>
        {props.ThemeData.mainImg && (
          <S.PreviewImg src={props.ThemeData.mainImg} alt="preview" />
        )}
        {!props.ThemeData.mainImg && <S.DefaultImg src="/img/home/home.png" />}

        <S.TitleBox>
          <S.MainTitle>제목:{props.ThemeData.title}</S.MainTitle>
          <S.SubTitle>부제목:{props.ThemeData.intro_title}</S.SubTitle>
        </S.TitleBox>
      </S.ThemeTitleBox>
      <S.RestDetailInfo>
        레벨:
        <Rate value={props.ThemeData.rank} />
        <S.AgeLimit>나이 제한:{props.ThemeData.agelimit}</S.AgeLimit>
        <S.Like>좋아요:{props.ThemeData.like}</S.Like>
      </S.RestDetailInfo>
    </S.ThemeItemWrapper>
  );
}
