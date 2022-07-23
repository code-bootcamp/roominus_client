import { v4 as uuidv4 } from "uuid";
import { IReservationThemeInfoProps } from "./reservationthemeinfo.types";
import * as S from "../reservationthemeInfo/reservationthemeinfo.styles";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { useRouter } from "next/router";

export default function ReservationThemeInfo(
  props: IReservationThemeInfoProps
) {
  const router = useRouter();
  const onClickMoveToThemeDetail = (event: { currentTarget: { id: any } }) => {
    router.push(`/theme/${event.currentTarget.id}`);
  };

  const onClickMoveToCafeDetail = (event: { currentTarget: { id: any } }) => {
    router.push(`/cafe/${event.currentTarget.id}`);
  };
  return (
    <S.ImageInfoBox>
      <S.ImageBox>
        <S.Image src={props.data?.fetchThemeMenus[0]?.theme?.mainImg} />
      </S.ImageBox>
      <S.InfoBox>
        <S.ThemeTitleBox>
          <h1
            id={props.data?.fetchThemeMenus[0]?.theme?.id}
            onClick={onClickMoveToThemeDetail}
          >
            {props.data?.fetchThemeMenus[0]?.theme?.title}
          </h1>
          <span>|</span>
          <S.ThemeCafe
            id={props.data.fetchThemeMenus[0]?.cafe.id}
            onClick={onClickMoveToCafeDetail}
          >
            {props.data?.fetchThemeMenus[0]?.cafe.address}{" "}
            {props.data?.fetchThemeMenus[0]?.cafe.name}
          </S.ThemeCafe>
        </S.ThemeTitleBox>

        <h2>{props.data?.fetchThemeMenus[0]?.theme?.intro_title}</h2>
        <h3>{props.data?.fetchThemeMenus[0]?.theme?.intro_content}</h3>

        <S.LimitBox>
          <S.ContentBox>
            <S.RunIcon fontSize="large" />
            <h4>연령제한</h4>
            <h3>{props.data?.fetchThemeMenus[0]?.theme?.agelimit}세 이상</h3>
          </S.ContentBox>

          <S.ContentBox>
            <S.TimeIcon fontSize="large" />
            <h4>소요시간</h4>
            <h3>{props.data?.fetchThemeMenus[0]?.theme?.clearTime}분</h3>
          </S.ContentBox>

          <S.ContentBox>
            <S.PeopleIcon fontSize="large" />
            <h4>수용인원</h4>
            <h3>1 ~ {props.data?.fetchThemeMenus[0]?.theme?.peoplelimit}명</h3>
          </S.ContentBox>
        </S.LimitBox>

        <S.TimeBoxes>
          <h3> 운영시간 | </h3>
          <S.Box>
            {props.timeTable.map(
              (el: boolean | ReactChild | ReactFragment | ReactPortal) => (
                <S.TimeBox key={uuidv4()}>
                  <h3>{el}</h3>
                </S.TimeBox>
              )
            )}
          </S.Box>
        </S.TimeBoxes>
        <S.RateBox>
          <span>난이도 :</span>
          <S.Star
            style={{ color: "purple" }}
            disabled
            defaultValue={props.data?.fetchThemeMenus[0]?.theme?.rank}
          />
        </S.RateBox>
      </S.InfoBox>
    </S.ImageInfoBox>
  );
}
