import Link from "next/link";
import * as S from "./ReservationSuccess.styles";
export default function ReservationSuccessUI() {
  return (
    <S.Container>
      <S.ContainerTitle>예약이 완료되었습니다</S.ContainerTitle>
      <S.Wrapper>
        <S.ImageBox>
          <S.Image src="/img/theme/네모네모.webp" />
        </S.ImageBox>

        <S.DataBox>
          <span> 테마 : 네모네모 마믈는 무슨밀미 밌멌믈까?</span>
          <span> 매장 : 건대 1호점 </span>
          <span> 일시 : 2022. 07. 29 (금) 17: 10 </span>
          <span> 인원 : 3명 </span>
          <span> 결제 금액 : 44000원 </span>
        </S.DataBox>
      </S.Wrapper>

      <S.NotionWrapper>
        <S.NoticeTitle> NOTICE </S.NoticeTitle>
        <S.NoticeImg src="/img/reservation/notice.png" />
      </S.NotionWrapper>
      <S.ButtonWrapper>
        <S.CancelBtn>
          <Link href={"/"}>
            <S.ButtonTitle> 메인으로 </S.ButtonTitle>
          </Link>
        </S.CancelBtn>
        <S.SubmitBtn>
          <Link href={"/mypage"}>
            <S.ButtonTitle> 마이페이지 </S.ButtonTitle>
          </Link>
        </S.SubmitBtn>
      </S.ButtonWrapper>
    </S.Container>
  );
}
