import * as S from "./ThemeDetail.styles";
import { IThemeDetailProps } from "./ThemeDetail.types";
import { Rate } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ThemeDetailUI(props: IThemeDetailProps) {
  return (
    <S.Container>
      <S.ThemeInfoWrapper>
        <S.ThemeLeftBox>
          <S.ThemeImg src={props.data?.fetchTheme?.mainImg} />
        </S.ThemeLeftBox>
        <S.ThemeRightBox>
          <S.ThemeTitle>{props.data?.fetchTheme.title}</S.ThemeTitle>
          {props.love ? (
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                fontSize: "2.5em",
                color: "#E53935",
                position: "absolute",
                right: "5%",
                top: "0%",
                cursor: "pointer",
              }}
              onClick={props.onClickLove}
            />
          ) : (
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                fontSize: "2.5em",
                color: "#DAD6E1",
                position: "absolute",
                right: "5%",
                top: "0%",
                cursor: "pointer",
              }}
              onClick={props.onClickLove}
            />
          )}

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
                난이도 :
                <Rate disabled value={props.data?.fetchTheme.rank} />
              </S.ThemeRank>
            </S.RankTimeBox>
            <S.LimitBox>
              <S.ThemeTime>
                <S.AgeLimit>
                  {props.data?.fetchTheme.agelimit}세 이상, 2명 ~{" "}
                  {props.data?.fetchTheme.peoplelimit}명 이용 가능
                </S.AgeLimit>
              </S.ThemeTime>
              <S.ChargeBox>
                <S.ThemeCharge>
                  이용시간 : {props.data?.fetchTheme.clearTime}분
                </S.ThemeCharge>
              </S.ChargeBox>
            </S.LimitBox>
          </S.ThemeInfo>
          <S.ButtonWrapper>
            <S.MoveToListButton onClick={props.onClickMoveToList}>
              목록으로
            </S.MoveToListButton>
            <S.ReservationButton onClick={props.onClickReservation}>
              예약하기
            </S.ReservationButton>
          </S.ButtonWrapper>
        </S.ThemeRightBox>
      </S.ThemeInfoWrapper>
    </S.Container>
  );
}
