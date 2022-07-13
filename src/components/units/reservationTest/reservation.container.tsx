import moment from "moment";
import { useState } from "react";
import ReservationUI from "./reservation.present";

export default function ReservationTest() {
  const [theme, setTheme] = useState("");
  const [cafe, setCafe] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  // const [inputValue, setInputValue] = useState(moment().format("YYYY-MM-DD"));
  const [time, setTime] = useState("");
  const [headCount, setHeadCount] = useState("");

  const onChangeTheme = (event) => {
    setTheme(event.target.value);
  };

  const onChangeCafe = (event: any) => {
    setCafe(event.target.value);
    console.log(cafe);
  };

  const onChangeDate = (date: String, value: String) => {
    setSelectedDate(date);
    // setInputValue(value);
  };

  const dateFormatter = (str: any) => {
    return str;
  };

  const onChangeTime = (event: any) => {
    setTime(event.target.value);
  };

  const onChangeHeadCount = (event) => {
    setHeadCount(event.target.value);
  };

  return (
    <ReservationUI
      onChangeTheme={onChangeTheme}
      theme={theme}
      onChangeCafe={onChangeCafe}
      cafe={cafe}
      onChangeDate={onChangeDate}
      selectedDate={selectedDate}
      // inputValue={inputValue}
      dateFormatter={dateFormatter}
      onChangeTime={onChangeTime}
      time={time}
      haedCount={headCount}
      onChangeHeadCount={onChangeHeadCount}
    />
  );
}
