import * as S from "./calender.styles";

export default function RenderDays() {
  const days = [];
  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

  for (let i = 0; i < 7; i++) {
    days.push(<S.Col key={i}>{date[i]}</S.Col>);
  }

  return <S.Days>{days}</S.Days>;
}
