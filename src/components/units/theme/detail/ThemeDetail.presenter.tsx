import * as S from "./ThemeDetail.styles";
import { IThemeDetailProps } from "./ThemeDetail.types";
import { Rate } from "antd";

export default function ThemeDetailUI(props: IThemeDetailProps) {
  return (
    <S.Container>
      <S.ThemeInfoWrapper>
        <S.ThemeLeftBox>
          <S.ThemeImg src={props.data?.fetchTheme?.mainImg} />
        </S.ThemeLeftBox>
        <S.ThemeRightBox>
          <S.ThemeTitle>{props.data?.fetchTheme.title}</S.ThemeTitle>
          <S.ThemeSubTitle>
            {props.data?.fetchTheme.intro_title}
          </S.ThemeSubTitle>
          <S.ThemeContents>
            {props.data?.fetchTheme.intro_content}
          </S.ThemeContents>
          <S.ThemeInfo>
            <S.RankTimeBox>
              장르 : {props.data?.fetchTheme.genre?.name}
              <S.ThemeRank>
                난이도 :{/* <img src="/img/theme/rankstar.webp" /> */}
                <Rate disabled defaultValue={props.data?.fetchTheme.rank} />
              </S.ThemeRank>
            </S.RankTimeBox>
            <S.LimitBox>
              <S.ThemeTime>
                <S.AgeLimit>
                  {props.data?.fetchTheme.agelimit}세 이상 2명 ~{" "}
                  {props.data?.fetchTheme.peoplelimit}명 이용 가능
                </S.AgeLimit>
              </S.ThemeTime>
              <S.ChargeBox>
                <S.ThemeCharge>
                  이용시간 : {props.data?.fetchTheme.clearTime}
                </S.ThemeCharge>
              </S.ChargeBox>
            </S.LimitBox>
          </S.ThemeInfo>
          <S.ButtonWrapper>
            <S.ReservationButton>예약하기</S.ReservationButton>
          </S.ButtonWrapper>
        </S.ThemeRightBox>
      </S.ThemeInfoWrapper>
    </S.Container>
  );
}
