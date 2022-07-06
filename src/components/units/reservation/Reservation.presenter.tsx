import SearchRoomCheckInDate from "./CheckInDate";
import * as S from "./Reservation.styles";
export default function ReservationUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Form>
          <S.SelectBox>
            <SearchRoomCheckInDate />
          </S.SelectBox>

          <S.InputBox>
            <S.InputLabel>예약자명</S.InputLabel>
            <S.Input type="text" placeholder="예약자 명을 입력해주세요." />
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>연락처</S.InputLabel>
            <S.Input type="text" placeholder="연락처를 입력해주세요." />
          </S.InputBox>

          <S.ButtonWrapper>
            <S.CancelBtn>취소</S.CancelBtn>
            <S.SubmitBtn>결제</S.SubmitBtn>
          </S.ButtonWrapper>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
}
