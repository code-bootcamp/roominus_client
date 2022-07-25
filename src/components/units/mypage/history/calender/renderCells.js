import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parse,
  startOfMonth,
  startOfWeek,
} from "date-fns";

import * as S from "./calender.styles";

export default function RenderCells(props) {
  const monthStart = startOfMonth(props.currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <S.Column key={day} onClick={() => props.onDateClick(parse(cloneDay))}>
          {!isSameMonth(day, monthStart) ? (
            <S.Disabled></S.Disabled>
          ) : (
            <>
              {isSameDay(day, props.selectedDate) ? (
                <S.Selected></S.Selected>
              ) : (
                <>
                  {format(props.currentMonth, "M") !== format(day, "M") ? (
                    <S.NotValid></S.NotValid>
                  ) : (
                    <S.Valid></S.Valid>
                  )}
                </>
              )}
            </>
          )}

          {format(props.currentMonth, "M") !== format(day, "M") ? (
            <S.NotValidSpan> {formattedDate}</S.NotValidSpan>
          ) : (
            <S.ValidSpan>{formattedDate}</S.ValidSpan>
          )}
        </S.Column>
      );
      day = addDays(day, 1);
    }
    rows.push(<S.Row key={day}>{days}</S.Row>);
    days = [];
  }

  return <S.CalendarBody>{rows}</S.CalendarBody>;
}
