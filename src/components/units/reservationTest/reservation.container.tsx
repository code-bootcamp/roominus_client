import moment from "moment";
import { useState } from "react";
import ReservationUI from "./reservation.present";

export default function ReservationTest() {
  const [cafe, setCafe] = useState("");
  const [selectedDate, setSelectedDate] = useState(moment());
  const [inputValue, setInputValue] = useState(moment().format("YYYY-MM-DD"));
  const [time, setTime] = useState("");

  const onChangeCafe = (event: any) => {
    console.log("this is target", event.target);
    setCafe(event.target.value);
    console.log(cafe);
  };

  const onChangeDate = (date: String, value: String) => {
    setSelectedDate(date);
    setInputValue(value);
    console.log("date", date);
    console.log("value", value);
  };

  const dateFormatter = (str: any) => {
    return str;
  };

  const onChangeTime = (event: any) => {
    console.log("this is target", event.target);
    setTime(event.target.value);
    console.log(time);
  };

  console.log(selectedDate);

  return (
    <ReservationUI
      onChangeCafe={onChangeCafe}
      cafe={cafe}
      onChangeDate={onChangeDate}
      selectedDate={selectedDate}
      inputValue={inputValue}
      dateFormatter={dateFormatter}
      onChangeTime={onChangeTime}
      time={time}
    />
  );
}
