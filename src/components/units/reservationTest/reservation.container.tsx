// import moment from "moment";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getDate } from "../../commons/getDate";
import usePayment from "../payment";
import ReservationUI from "./reservation.present";
import { FETCH_THEMES, FETCH_THEME_MENUS } from "./reservation.queries";

export default function ReservationTest() {
  // const [inputValue, setInputValue] = useState(moment().format("YYYY-MM-DD"));

  const [themeId, setThemeId] = useState("");
  const [cafeId, setCafeId] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [time, setTime] = useState("");
  const [peopleNumber, setPeopleNumber] = useState("");
  const [usePoint, setUsePoint] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  const { data: themesList } = useQuery(FETCH_THEMES);
  const { data } = useQuery(FETCH_THEME_MENUS, {
    variables: { themeId },
  });

  const { register, handleSubmit, formState } = useForm();

  const dateFormatter = (str: any) => {
    return str;
  };

  const onClickReset = () => {
    setThemeId("");
  };

  const onChangeTheme = (event: any) => {
    setThemeId(event.target.value);
    console.log(themeId);
  };

  const onChangeCafe = (event: any) => {
    setCafeId(event.target.value);
  };

  const onChangeDate = (date: String) => {
    setReservationDate(getDate(date));
    console.log("date:", date);
    console.log("reservationDate:", reservationDate);
    // String 포맷으로 저장할 때 dayjs 사용할 것
  };

  const onChangeTime = (event: any) => {
    setTime(event.target.value);
  };

  const onChangeHeadCount = (event: any) => {
    setPeopleNumber(event.target.value);
    setTotalPrice(event.target.value);
  };

  const onChangePoint = (event: any) => {
    setUsePoint(event.target.value);
  };

  const onClickSubmit = (data: any) => {
    console.log(
      "submit:",
      "themeId:",
      themeId,
      "cafeId:",
      cafeId,
      "date:",
      reservationDate,
      "time:",
      time,
      "headCount:",
      peopleNumber,
      "point:",
      usePoint,
      "price:",
      totalPrice,
      "name:",
      data.name,
      "phone:",
      data.phoneNumber,
      "memo:",
      data.memo
    );
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
      time={time}
      onChangeTime={onChangeTime}
      // 인원변경
      peopleNumber={peopleNumber}
      onChangeHeadCount={onChangeHeadCount}
      // 포인트 변경
      usePoint={usePoint}
      onChangePoint={onChangePoint}
      // 결제 금액 변경
      totalPrice={totalPrice}
      // react-hook-form
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      // 전체 테마 목록 데이터
      themesList={themesList}
      // 선택한 테마의 데이터
      data={data}
      // 목록으로 돌아가기
      onClickReset={onClickReset}
      // 제출하기
      onClickSubmit={onClickSubmit}
    />
  );
}
