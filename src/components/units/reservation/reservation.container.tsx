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
  const [usePoint, setUsePoint] = useState(userInfo.point);
  const [totalPrice, setTotalPrice] = useState(0);
  const [memo, setMemo] = useState("");
  const [checked, setChecked] = useState(false);

  // 전체 테마리스트, 메뉴 예약 리스트, 예약된 리스트 불러오기
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

  // 이미 예약이 된 리스트의 타임 분리
  const soldOut = reservations?.fetchReservations?.map(
    (el: { theme_menu: { reservation_time: any } }) =>
      el.theme_menu.reservation_time
  );

  // 날짜 포맷
  const dateFormatter = (str: string) => {
    return str;
  };

  // 전체 리스트 || 테마 상세에서 theme 선택 후 얻은 themeId 로 예약 리스트를 부른다
  const onChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    setThemeId(event.target.value);
    setPickTheme("");
    setPeopleNumber(0);
    setReservationDate("");
    setTime("");
    setCafeId("");
  };

  // 매장 선택 -> cafeId 추출
  const onChangeCafe = (event: ChangeEvent<HTMLInputElement>) => {
    setCafeId(event.target.value);
  };

  // 날짜 선택
  const onChangeDate = (date: string) => {
    const selectDate = dayjs(date).format("YYYY-MM-DD");
    setReservationDate(selectDate);
  };

  // 현재 테마 메뉴 리스트에 있는 모든 타임을 부르고, 중복된 시간을 제외한 타임테이블만 보여준다
  const timeResult = data?.fetchThemeMenus.map(
    (el: IFetchThemeMenus) => el.reservation_time
  );
  const set = new Set(timeResult);
  const timeTable = [...set];

  // const ableTime = timeTable?.filter((el) => {
  //   if (!soldOut?.includes(el)) return el;
  // });

  // 예약이 되지 않은 시간만 보여준다
  const ableTime = timeTable.filter((el) => {
    return !soldOut?.includes(el);
  });

  // 시간 선택
  const onChangeTime = (event: ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  // 선택한 타임에 맞게 인원 리스트를 업데이트 해야 함
  useEffect(() => {
    const peopleResult = data?.fetchThemeMenus
      .filter((el: IFetchThemeMenus) => el.reservation_time === time)
      .map((el: IFetchThemeMenus) => el.people_number);

    setSelectTime(peopleResult);
  }, [time]);

  // 인원 선택
  const onChangeHeadCount = (event: ChangeEvent<HTMLInputElement>) => {
    setPeopleNumber(Number(event.target.value));
  };

  // 선택한 인원에 따라 가격달라지게
  useEffect(() => {
    const priceResult = data?.fetchThemeMenus
      .filter((el: IFetchThemeMenus) => el.reservation_time === time)
      .filter(
        (el: IFetchThemeMenus) => el.people_number === peopleNumber
      )[0]?.price;

    setTotalPrice(priceResult);
  }, [peopleNumber]);

  // 포인트하고 최종 결제 금액 천천히 바뀌게
  const getDebounce = _.debounce((data) => {
    setUsePoint(Number(data));
  }, 400);

  // 포인트
  const onChangePoint = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // 예약에 사용할 themeMenuId 추출
  const ThemeMenuId = data?.fetchThemeMenus
    .filter((el: IFetchThemeMenus) => el.reservation_time === time)
    .filter((el: IFetchThemeMenus) => el.people_number === peopleNumber)[0]?.id;

  // 메모
  const onChangeMemo = (event: ChangeEvent<HTMLInputElement>) => {
    setMemo(event?.target.value);
  };

  // 약관 동의
  const onChangeChecked = () => {
    setChecked((prev) => !prev);
  };

  // 취소하기 시, 리코일에 저장된(상세에서 저장한) theme id와 예약 페이지에서 누른 state 비우기
  const onClickReset = () => {
    setThemeId("");
    setPickTheme("");
  };

  return (
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
  );
}
