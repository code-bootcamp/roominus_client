import { useQuery } from "@apollo/client";
import { addMonths, subMonths } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import WebBlackButton from "../../../../commons/buttons/buttonDesktop/WebBlackButton";
import { FETCH_RESERVATIONS_USER } from "../History.queries";
import * as S from "./calender.styles";
import RenderDays from "./rederDays";
import RenderCells from "./renderCells";
import RenderHeader from "./renderHeader";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // 월
  const router = useRouter();
  const { data } = useQuery(FETCH_RESERVATIONS_USER);

  // 이전 달
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  // 다음 달
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onClickDetail = (event: { target: { id: any } }) => {
    router.push(`/reservation/${event?.target.id}`);
  };

  return (
    <S.CalenderWrapper>
      <S.TitleBox>
        <S.Title>나의 포토캘린더</S.Title>
      </S.TitleBox>

      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDays />
      <RenderCells
        data={data}
        currentMonth={currentMonth}
        onClickDetail={onClickDetail}
      />

      <S.ButtonBox>
        <Link href={"/mypage/history"}>
          <a>
            <WebBlackButton type="button" title="돌아가기" />
          </a>
        </Link>
      </S.ButtonBox>
    </S.CalenderWrapper>
  );
}

// 달력 3등분
// 헤더 (년도, 월 , 이전-다음 달로 이동)
// 데이즈 (요일)
// 바디 (날짜)
