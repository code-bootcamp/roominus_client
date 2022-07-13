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
  const [price, setPrice] = useState(0);
  const [point, setPoint] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const dateFormatter = (str: any) => {
    return str;
  };

  const onChangeTheme = (event) => {
    setTheme(event.target.value);
    console.log("theme:", theme);
  };

  const onChangeCafe = (event: any) => {
    setCafe(event.target.value);
    console.log("cafe:", cafe);
  };

  const onChangeDate = (date: String, value: String) => {
    setSelectedDate(date);
    // setInputValue(value);
    console.log("date:", date);

    // String 포맷으로 저장할 때 dayjs 사용할 것
  };

  const onChangeTime = (event: any) => {
    setTime(event.target.value);
    console.log("time:", time);
  };

  const onChangeHeadCount = (event) => {
    setHeadCount(event.target.value);
    setPrice(event.target.value * 12000);
    setTotalPrice(price);

    console.log("price:", price);
  };

  const onChangePoint = (event) => {
    setPoint(event.target.value);
    console.log("point:", point);

    setTotalPrice(price - point);
    console.log("total:", totalPrice);
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
      time={time}
      onChangeTime={onChangeTime}
      haedCount={headCount}
      onChangeHeadCount={onChangeHeadCount}
      point={point}
      onChangePoint={onChangePoint}
      totalPrice={totalPrice}
    />
  );
}
