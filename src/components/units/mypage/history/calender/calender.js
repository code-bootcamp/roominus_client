import { addMonths, subMonths } from "date-fns";
import { useState } from "react";
import * as S from "./calender.styles";
import RenderDays from "./rederDays";
import RenderCells from "./renderCells";
import RenderHeader from "./renderHeader";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // 월
  const [selectedDate, setSelectedDate] = useState(new Date());
  // 일

  // 이전 달
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  // 다음 달
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // 날짜 선택
  const onDateClick = (day) => {
    setSelectedDate(day);
    console.log(selectedDate);
  };
  return (
    <S.CalenderWrapper>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDays />
      <RenderCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </S.CalenderWrapper>
  );
}

// 달력 3등분
// 헤더 (년도, 월 , 이전-다음 달로 이동)
// 데이즈 (요일)
// 바디 (날짜)
