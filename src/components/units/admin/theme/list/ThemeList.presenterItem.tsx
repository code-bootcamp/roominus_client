import * as S from "./ThemeList.styles";
import { Rate } from "antd";
import { IThemeListUIItemProps } from "./ThemeList.types";

export default function ThemeListUIItem(props: IThemeListUIItemProps) {
  return (
    <S.ThemeItemWrapper
      onClick={props.onClickMoveToThemeDetail(props.ThemeData.id)}
    >
      <S.ThemeTitleBox>
        {props.ThemeData.mainImg && (
          <S.PreviewImg src={props.ThemeData.mainImg} alt="preview" />
        )}
        {!props.ThemeData.mainImg && (
          <S.DefaultImg src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990936/public/community/noImage_ofbjxy.png" />
        )}

        <S.TitleBox>
          <S.MainTitle>{props.ThemeData.title}</S.MainTitle>
          <S.SubTitle>{props.ThemeData.intro_title}</S.SubTitle>
        </S.TitleBox>
      </S.ThemeTitleBox>
      <S.RestDetailInfo>
        <Rate value={props.ThemeData.rank} />
        <S.AgeLimit>나이 제한:{props.ThemeData.agelimit}</S.AgeLimit>
        <div>인원 제한: {props.ThemeData?.peoplelimit}</div>
        <div>매장: {props.ThemeData?.cafe?.name}</div>
        <div>장르: {props.ThemeData?.genre?.name}</div>
        <div>이용시간: {props.ThemeData?.clearTime}</div>
        <S.Like>좋아요:{props.ThemeData.like}</S.Like>
      </S.RestDetailInfo>
    </S.ThemeItemWrapper>
  );
}
