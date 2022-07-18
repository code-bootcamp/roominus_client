// import moment from "moment";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { getDate } from "../../commons/getDate";
import ReservationUI from "./reservation.present";
import { FETCH_THEMES, FETCH_THEME_MENUS } from "./reservation.queries";

export default function Reservation() {
  // const [inputValue, setInputValue] = useState(moment().format("YYYY-MM-DD"));

  const [themeId, setThemeId] = useState("");
  const [cafeId, setCafeId] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [time, setTime] = useState("");
  const [selectTime, setSelectTime] = useState([]);
  const [peopleNumber, setPeopleNumber] = useState();
  const [usePoint, setUsePoint] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [memo, setMemo] = useState("");
  const [checked, setChecked] = useState(false);

  const { data: themesList } = useQuery(FETCH_THEMES);
  const { data } = useQuery(FETCH_THEME_MENUS, {
    variables: { themeId },
  });

  const dateFormatter = (str: any) => {
    return str;
  };

  const onClickReset = () => {
    setThemeId("");
  };

  const onChangeTheme = (event) => {
    setThemeId(event.target.value);
    console.log(themeId);
  };

  const onChangeCafe = (event) => {
    setCafeId(event.target.value);
  };

  const onChangeDate = (date: String) => {
    setReservationDate(getDate(date));
  };

  const timeResult = data?.fetchThemeMenus.map((el) => el.reservation_time);
  const set = new Set(timeResult);
  const uniqeTime = [...set];

  const onChangeTime = (event) => {
    setTime(event.target.value);
  };

  useEffect(() => {
    const peopleResult = data?.fetchThemeMenus
      .filter((el: any) => el.reservation_time === time)
      .map((el: any) => el.people_number);

    setSelectTime(peopleResult);
  }, [time]);

  const onChangeHeadCount = (event: any) => {
    setPeopleNumber(event.target.value);
  };

  useEffect(() => {
    const priceResult = data?.fetchThemeMenus
      .filter((el: any) => el.reservation_time === time)
      .filter((el: any) => el.people_number === peopleNumber)[0]?.price;

    console.log("priceResult", priceResult);
    setTotalPrice(priceResult);
  }, [peopleNumber]);

  const onChangePoint = (event: any) => {
    setUsePoint(event.target.value);
  };

  const ThemeMenuId = data?.fetchThemeMenus
    .filter((el: any) => el.reservation_time === time)
    .filter((el: any) => el.people_number === peopleNumber)[0]?.id;

  const onChangeMemo = (event) => {
    setMemo(event?.target.value);
    console.log(memo);
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
        uniqeTime={uniqeTime}
        time={time}
        onChangeTime={onChangeTime}
        selectTime={selectTime}
        // 인원변경
        peopleNumber={peopleNumber}
        onChangeHeadCount={onChangeHeadCount}
        // 포인트 변경
        usePoint={usePoint}
        setUsePoint={setUsePoint}
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
      />
    </>
  );
}
