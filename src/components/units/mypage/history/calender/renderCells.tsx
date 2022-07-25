import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { MouseEventHandler } from "react";
import { getToday } from "../../../../commons/getDate";

import * as S from "./calender.styles";

interface IRenderCellsProps {
  onClickDetail: MouseEventHandler<HTMLImageElement>;
  currentMonth: Date;
  data: any;
}

interface IFetchReservationsUser {
  reservation_date: string;
}

export default function RenderCells(props: IRenderCellsProps) {
  const monthStart = startOfMonth(props.currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  const reservationDays = props.data?.fetchReservationsUser.map(
    (el: { reservation_date: any }) => el.reservation_date
  );
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      if (reservationDays?.includes(getToday(day))) {
        const result = props.data?.fetchReservationsUser.filter(
          (el: IFetchReservationsUser) => el.reservation_date === getToday(day)
        );
        const ImgUrl = result[0].theme_menu.theme.mainImg;
        formattedDate = format(day, "d");
        const Id = result[0].id;
        console.log(Id);

        days.push(
          <S.Column key={day}>
            {format(props.currentMonth, "M") !== format(day, "M") ? (
              <S.NotValid>
                <S.NotValidSpan> {formattedDate}</S.NotValidSpan>
                <S.ThemeImgae
                  id={Id}
                  src={ImgUrl}
                  onClick={props.onClickDetail}
                />
              </S.NotValid>
            ) : (
              <S.Valid>
                <S.ValidSpan>{formattedDate}</S.ValidSpan>
                <S.ThemeImgae
                  id={Id}
                  src={ImgUrl}
                  onClick={props.onClickDetail}
                />
              </S.Valid>
            )}
          </S.Column>
        );
      } else {
        formattedDate = format(day, "d");
        days.push(
          <S.Column key={day}>
            {format(props.currentMonth, "M") !== format(day, "M") ? (
              <S.NotValid>
                <S.NotValidSpan> {formattedDate}</S.NotValidSpan>
              </S.NotValid>
            ) : (
              <S.Valid>
                <S.ValidSpan>{formattedDate}</S.ValidSpan>
              </S.Valid>
            )}
          </S.Column>
        );
      }

      day = addDays(day, 1);
    }
    rows.push(<S.Row key={day}>{days}</S.Row>);
    days = [];
  }

  return <S.CalendarBody>{rows}</S.CalendarBody>;
}
