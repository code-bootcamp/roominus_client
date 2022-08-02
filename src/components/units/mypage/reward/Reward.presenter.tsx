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
          <S.ColumnHeaderTitle>결제 테마</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>결제 가격</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>사용 포인트</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>적립 예정</S.ColumnHeaderBasic>
        </S.TitleRow>
        {props.data?.fetchPayments.map((el: IFetchPayments, index: number) => (
          <S.Row key={el.id}>
            <S.ColumnNumber>{index + 1}</S.ColumnNumber>
            <S.ColumnTitle onClick={props.onClickReservationDetail}>
              {el.reservation.theme_menu.theme.title}
            </S.ColumnTitle>
            <S.ColumnPoint>{el.price.toLocaleString()}원</S.ColumnPoint>
            <S.ColumnPoint>{el.usepoint.toLocaleString()}원</S.ColumnPoint>
            <S.ColumnPoint>
              {Math.ceil(el.price * 0.03).toLocaleString()}원
            </S.ColumnPoint>
          </S.Row>
        ))}
        <S.TableBottom />
      </S.Wrapper>{" "}
      <S.FooterBox>
        <S.PaginationsWrapper>
          <Paginations01
            count={props.count?.fetchPaymentsCount}
            refetch={props.refetch}
          />
        </S.PaginationsWrapper>
        <S.ButtonBox>
          <Link href={"/mypage"}>
            <a>
              <WebBlackButton type="button" title="돌아가기" />
            </a>
          </Link>
        </S.ButtonBox>
      </S.FooterBox>
    </S.Container>
  );
}
