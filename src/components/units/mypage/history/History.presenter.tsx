import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import * as S from "./History.styles";
import { IData, IHistoryUIProps } from "./History.types";

export default function HistoryUI(props: IHistoryUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 예약내역</S.Title>
        <S.TableTop />
        <S.TitleRow>
          <S.ColumnHeaderTitle>번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>예약 번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>예약 상태</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>테마</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>날짜</S.ColumnHeaderTitle>
        </S.TitleRow>
        {props.data?.fetchReservationsUser.map((el: IData, index: number) => (
          <S.Row key={index}>
            <S.ColumnBasic>{index + 1}</S.ColumnBasic>
            <S.ColumnBasic>{el.reservation_date}</S.ColumnBasic>
            <S.ColumnBasic>{index + 1}</S.ColumnBasic>
            <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
        <S.ButtonBox>
          <Link href={"/mypage"}>
            <WebBlackButton type="button" title="목록으로" />
          </Link>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
