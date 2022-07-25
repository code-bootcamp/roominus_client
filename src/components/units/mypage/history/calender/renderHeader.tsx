import { format } from "date-fns";
import * as S from "./calender.styles";

interface IRenderHeaderProps {
  currentMonth: any;
  prevMonth: any;
  nextMonth: any;
}

export default function RenderHeader(props: IRenderHeaderProps) {
  return (
    <S.CalenderHeader>
      <S.StartMonth>
        <span>
          <span>{format(props.currentMonth, "M")}월</span>
          {format(props.currentMonth, "yyyy")}
        </span>
      </S.StartMonth>
      <S.EndMonth>
        <S.ArrowBack onClick={props.prevMonth} />
        <S.ArrowForward onClick={props.nextMonth} />
      </S.EndMonth>
    </S.CalenderHeader>
  );
}
