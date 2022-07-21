import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import * as S from "./Reward.styles";
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
          <S.ColumnHeaderTitle>번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>결제 가격</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>포인트</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>포인트변동</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>날짜</S.ColumnHeaderTitle>
        </S.TitleRow>
        {props.data?.fetchPayments.map((el: IFetchPayments, index: number) => (
          <S.Row key={index}>
            <S.ColumnBasic>{index + 1}</S.ColumnBasic>
            <S.ColumnBasic>{el.price}</S.ColumnBasic>
            <S.ColumnBasic>{el.usepoint}</S.ColumnBasic>
            <S.ColumnBasic>{el.user.point}</S.ColumnBasic>
            <S.ColumnBasic>{el.reservation.reservation_date}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
        <S.ButtonBox>
          <Link href={"/mypage"}>
            <WebBlackButton
              type="button"
              title="목록으로"
              onClick={undefined}
              value={undefined}
            />
          </Link>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
