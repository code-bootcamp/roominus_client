import { format } from "date-fns";
import * as S from "./calender.styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function RenderHeader(props) {
  return (
    <S.CalenderHeader>
      <S.StartMonth>
        <span>
          <span>{format(props.currentMonth, "M")}월</span>
          {format(props.currentMonth, "yyyy")}
        </span>
      </S.StartMonth>
      <S.EndMonth>
        <ArrowBackIosIcon onClick={props.prevMonth} />
        <ArrowForwardIosIcon onClick={props.nextMonth} />
      </S.EndMonth>
    </S.CalenderHeader>
  );
}
