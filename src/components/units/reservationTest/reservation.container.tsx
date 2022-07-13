// import moment from "moment";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import ReservationUI from "./reservation.present";
import { FETCH_THEMES, FETCH_THEME_MENUS } from "./reservation.queries";

export default function ReservationTest() {
  // const [inputValue, setInputValue] = useState(moment().format("YYYY-MM-DD"));

  const [theme, setTheme] = useState("");
  const [cafe, setCafe] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const [time, setTime] = useState("");
  const [headCount, setHeadCount] = useState("");
  const [point, setPoint] = useState(500);
  const [totalPrice, setTotalPrice] = useState();

  const { data: themesList } = useQuery(FETCH_THEMES);
  const { data } = useQuery(FETCH_THEME_MENUS, {
    variables: { themeId: theme },
  });

  const dateFormatter = (str: any) => {
    return str;
  };

  const onChangeTheme = (event) => {
    setTheme(event.target.value);
  };

  const onChangeCafe = (event: any) => {
    setCafe(event.target.value);
    console.log("cafe:", cafe);
  };

  const onChangeDate = (date: String, value: String) => {
    setSelectedDate(date);
    // setInputValue(value);

    // String 포맷으로 저장할 때 dayjs 사용할 것
  };

  const onChangeTime = (event: any) => {
    setTime(event.target.value);
  };

  const onChangeHeadCount = (event) => {
    setHeadCount(event.target.value);
    setTotalPrice(event.target.value);
  };

  const onChangePoint = (event) => {
    setPoint(event.target.value);
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
    />
  );
}
