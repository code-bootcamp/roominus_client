// import moment from "moment";
import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import ReservationUI from "./reservation.present";
import dayjs from "dayjs";
import {
  FETCH_RESERVATIONS,
  FETCH_THEMES_ALL,
  FETCH_THEME_MENUS,
} from "./reservation.queries";
import { IFetchThemeMenus } from "./reservation.types";
import { useRecoilState } from "recoil";
import { userInfoState, userPickThemeState } from "../../../commons/store";
import _ from "lodash";

export default function Reservation() {
  // const [inputValue, setInputValue] = useState(moment().format("YYYY-MM-DD"));

  const [userInfo] = useRecoilState(userInfoState);
  const [pickTheme, setPickTheme] = useRecoilState(userPickThemeState);

  const [themeId, setThemeId] = useState("" || pickTheme);
  const [cafeId, setCafeId] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [time, setTime] = useState("");
  const [selectTime, setSelectTime] = useState([]);
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [usePoint, setUsePoint] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [memo, setMemo] = useState("");
  const [checked, setChecked] = useState(false);

  const { data: themesList } = useQuery(FETCH_THEMES_ALL);
  const { data } = useQuery(FETCH_THEME_MENUS, {
    variables: { themeId },
  });

  const { data: reservations } = useQuery(FETCH_RESERVATIONS, {
    variables: {
      cafeId,
      reservationDate,
    },
  });

  const soldOut = reservations?.fetchReservations?.map(
    (el: { theme_menu: { reservation_time: any } }) =>
      el.theme_menu.reservation_time
  );

  const dateFormatter = (str: string) => {
    return str;
  };

  const onClickReset = () => {
    setThemeId("");
    setPickTheme("");
  };

  const onChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    setThemeId(event.target.value);
    setPickTheme("");
  };

  const onChangeCafe = (event: ChangeEvent<HTMLInputElement>) => {
    setCafeId(event.target.value);
  };

  const onChangeDate = (date: string) => {
    const selectDate = dayjs(date).format("YYYY-MM-DD");
    setReservationDate(selectDate);
  };

  const timeResult = data?.fetchThemeMenus.map(
    (el: IFetchThemeMenus) => el.reservation_time
  );
  const set = new Set(timeResult);
  const timeTable = [...set];

  // const ableTime = timeTable?.filter((el) => {
  //   if (!soldOut?.includes(el)) return el;
  // });

  const ableTime = timeTable.filter((el) => {
    return !soldOut?.includes(el);
  });

  const onChangeTime = (event: ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  useEffect(() => {
    const peopleResult = data?.fetchThemeMenus
      .filter((el: IFetchThemeMenus) => el.reservation_time === time)
      .map((el: IFetchThemeMenus) => el.people_number);

    setSelectTime(peopleResult);
  }, [time]);

  const onChangeHeadCount = (event: ChangeEvent<HTMLInputElement>) => {
    setPeopleNumber(Number(event.target.value));
  };

  useEffect(() => {
    const priceResult = data?.fetchThemeMenus
      .filter((el: IFetchThemeMenus) => el.reservation_time === time)
      .filter(
        (el: IFetchThemeMenus) => el.people_number === peopleNumber
      )[0]?.price;

    setTotalPrice(priceResult);
  }, [peopleNumber]);

  const getDebounce = _.debounce((data) => {
    setUsePoint(Number(data));
  }, 400);

  const onChangePoint = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const ThemeMenuId = data?.fetchThemeMenus
    .filter((el: IFetchThemeMenus) => el.reservation_time === time)
    .filter((el: IFetchThemeMenus) => el.people_number === peopleNumber)[0]?.id;

  const onChangeMemo = (event: ChangeEvent<HTMLInputElement>) => {
    setMemo(event?.target.value);
  };

  const onChangeChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <ReservationUI
        // 테마 변경
        themeId={themeId}
        onChangeTheme={onChangeTheme}
        // 매장 변경
        cafeId={cafeId}
        onChangeCafe={onChangeCafe}
        // 날짜변경
        reservationDate={reservationDate}
        onChangeDate={onChangeDate}
        // inputValue={inputValue}
        dateFormatter={dateFormatter}
        // 시간변경
        ableTime={ableTime}
        time={time}
        onChangeTime={onChangeTime}
        selectTime={selectTime}
        // 인원변경
        peopleNumber={peopleNumber}
        onChangeHeadCount={onChangeHeadCount}
        // 포인트 변경
        usePoint={usePoint}
        onChangePoint={onChangePoint}
        // 결제 금액 변경
        totalPrice={totalPrice}
        // 메모
        memo={memo}
        onChangeMemo={onChangeMemo}
        // 전체 테마 목록 데이터
        themesList={themesList}
        // 선택한 테마의 데이터
        data={data}
        // 목록으로 돌아가기
        onClickReset={onClickReset}
        // 예약에 사용할 props
        ThemeMenuId={ThemeMenuId}
        // cafeId={cafeId}
        // reservationDate={reservationDate}
        // memo={data?.memo}
        // peopleNumber={peopleNumber}
        // usePoint={usePoint}
        // 동의 약관
        onChangeChecked={onChangeChecked}
        checked={checked}
        // userInfo
        max={userInfo.point}
        reservations={reservations}
        timeTable={timeTable}
      />
    </>
  );
}
