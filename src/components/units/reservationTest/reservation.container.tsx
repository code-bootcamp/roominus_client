// import moment from "moment";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import ReservationUI from "./reservation.present";
import { FETCH_THEMES, FETCH_THEME_MENUS } from "./reservation.queries";

export default function ReservationTest() {
  // const [inputValue, setInputValue] = useState(moment().format("YYYY-MM-DD"));

  const [theme, setTheme] = useState();
  const [cafe, setCafe] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [time, setTime] = useState();
  const [headCount, setHeadCount] = useState();
  const [point, setPoint] = useState(0);
  const [totalPrice, setTotalPrice] = useState();

  const { data: themesList } = useQuery(FETCH_THEMES);
  const { data } = useQuery(FETCH_THEME_MENUS, {
    variables: { themeId: theme },
  });

  const CafeResult = data?.fetchThemeMenus.map((el: any) => el.cafe.name);
  const set1 = new Set(CafeResult);
  const uniqeCafe = [...set1];

  console.log("fetchThemeMenus:", data?.fetchThemeMenus);

  const PeopleResult = data?.fetchThemeMenus.map((el: any) => el.people_number);
  const set2 = new Set(PeopleResult);
  const uniqePeople = [...set2];

  const dateFormatter = (str: any) => {
    return str;
  };

  const onClickReset = () => {
    setTheme("");
  };
  const onChangeTheme = (event: any) => {
    setTheme(event.target.value);
  };

  const onChangeCafe = (event: any) => {
    setCafe(event.target.value);
  };

  const onChangeDate = (date: String, value: String) => {
    setSelectedDate(date);
    // setInputValue(value);
    // String 포맷으로 저장할 때 dayjs 사용할 것
  };

  const onChangeTime = (event: any) => {
    setTime(event.target.value);
  };

  const onChangeHeadCount = (event: any) => {
    setHeadCount(event.target.value);
    setTotalPrice(event.target.value);
  };

  const onChangePoint = (event: any) => {
    setPoint(event.target.value);
  };

  const onClickSubmit = () => {
    console.log(theme, cafe, selectedDate, time, headCount, point);
  };

  return (
    <ReservationUI
      onChangeTheme={onChangeTheme}
      onChangeCafe={onChangeCafe}
      cafe={cafe}
      onChangeDate={onChangeDate}
      selectedDate={selectedDate}
      // inputValue={inputValue}
      dateFormatter={dateFormatter}
      time={time}
      onChangeTime={onChangeTime}
      haedCount={headCount}
      onChangeHeadCount={onChangeHeadCount}
      point={point}
      onChangePoint={onChangePoint}
      totalPrice={totalPrice}
      data={data}
      themesList={themesList}
      theme={theme}
      uniqeCafe={uniqeCafe}
      uniqePeople={uniqePeople}
      onClickSubmit={onClickSubmit}
      onClickReset={onClickReset}
    />
  );
}
