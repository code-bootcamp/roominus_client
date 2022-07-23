import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import Paginations01 from "../../../commons/pagination/Paginations.container";
// import * as S from "./Reward.styles";
import * as S from "../My.styles";

import { IFetchPayments, IRewardUIProps } from "./Reward.types";

export default function RewardUI(props: IRewardUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 적립내역</S.Title>
        <S.CountBox>
          <span>총 {props.count?.fetchPaymentsCount}건</span>
        </S.CountBox>
        <S.TableTop />
        <S.TitleRow>
          <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
          <S.ColumnHeaderTitle>결제 가격</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>사용한 포인트</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>적립예정 포인트</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        </S.TitleRow>
        {props.data?.fetchPayments.map((el: IFetchPayments, index: number) => (
          <S.Row key={index}>
            <S.ColumnNumber>{index + 1}</S.ColumnNumber>
            <S.ColumnTitle>{el.price}</S.ColumnTitle>
            <S.ColumnBasic>{el.usepoint}원</S.ColumnBasic>
            <S.ColumnBasic>{Math.ceil(el.price * 0.03)}원</S.ColumnBasic>
            <S.ColumnBasic>{el.reservation.reservation_date}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
      </S.Wrapper>{" "}
      <S.PaginationsWrapper>
        <Paginations01
          count={props.count?.fetchPaymentsCount}
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
