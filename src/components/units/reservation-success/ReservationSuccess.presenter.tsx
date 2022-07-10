import Link from "next/link";
import * as S from "./ReservationSuccess.styles";

export default function ReservationSuccessUI() {
  return (
    <S.Container>
      <S.TitleBox>
        <S.From />
        <S.ContainerTitle>예약이 완료되었습니다</S.ContainerTitle>
      </S.TitleBox>

      <S.Wrapper>
        <S.TicketTitleBox>
          <S.Title>TICKET</S.Title>
        </S.TicketTitleBox>
        <S.IamgeDataBox>
          <>
            <S.Image src="/img/theme/월야애담.jpeg" />
          </>
          <S.DataBox>
            <h2>예약 번호 : 1239493en320</h2>
            <h3>테마명 : 월야애담</h3>
            <span>예약자 : 홍길동</span>
            <span>연락처 : 010-1234-5678</span>
            <span>테마 : 월야애담</span>
            <span>일시: 2022.07.29.금 17:30</span>
            <span>매장 : 홍대1호점</span>
            <span>인원 : 3인</span>
            <span>결제금액 : 50000원</span>
          </S.DataBox>
        </S.IamgeDataBox>

        <>
          <S.Barcode src="/img/reservation/barcode.png" />
        </>
      </S.Wrapper>

      <S.NotionWrapper>
        <S.NoticeTitle> NOTICE </S.NoticeTitle>
        <S.NoticeImg src="/img/reservation/notice.png" />
      </S.NotionWrapper>
      <S.ButtonWrapper>
        <S.CancelBtn>
          <Link href={"/"}>
            <S.ButtonTitle> 취소하기 </S.ButtonTitle>
          </Link>
        </S.CancelBtn>
        <S.SubmitBtn>
          <Link href={"/mypage"}>
            <S.ButtonTitle> 목록으로 </S.ButtonTitle>
          </Link>
        </S.SubmitBtn>
      </S.ButtonWrapper>
    </S.Container>
  );
}
