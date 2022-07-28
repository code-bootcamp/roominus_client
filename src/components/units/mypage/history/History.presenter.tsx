import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import Paginations01 from "../../../commons/pagination/Paginations.container";
import * as S from "../My.styles";
import { IData, IHistoryUIProps } from "./History.types";

import Tooltip from "@mui/material/Tooltip";

export default function HistoryUI(props: IHistoryUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TitleBox>
          <S.Title>나의 예약내역</S.Title>
          <Link href={"/mypage/history/calendar"}>
            <Tooltip title="Photo Calendar">
              <S.Calendar />
            </Tooltip>
          </Link>
        </S.TitleBox>

        <S.CountBox>
          <span>총 {props.count?.fetchReservationUserCount}건</span>
        </S.CountBox>
        <S.TableTop />
        <S.TitleRow>
          <S.ColumnHeaderNumber>예약 번호</S.ColumnHeaderNumber>
          <S.ColumnHeaderTitle>테마</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>방문일</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>시간</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>예약 상태</S.ColumnHeaderBasic>
        </S.TitleRow>
        {props.data?.fetchReservationsUser.map((el: IData, index: number) => (
          <S.Row key={index}>
            <S.ColumnNumber>{el.id.split("-")[0].slice(-5)}</S.ColumnNumber>
            <S.ColumnTitle id={el.id} onClick={props.onClickReservationDetail}>
              {el.theme_menu.theme.title}
            </S.ColumnTitle>
            <S.ColumnBasic>{el.reservation_date}</S.ColumnBasic>
            <S.ColumnBasic>{el.theme_menu?.reservation_time}</S.ColumnBasic>
            <S.ColumnBasic>{el.status}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
      </S.Wrapper>
      <S.PaginationsWrapper>
        <Paginations01
          count={props.count?.fetchReservationUserCount}
          refetch={props.refetch}
        />
      </S.PaginationsWrapper>

      <S.ButtonBox>
        <Link href={"/mypage"}>
          <WebBlackButton type="button" title="돌아가기" />
        </Link>
      </S.ButtonBox>
    </S.Container>
  );
}
