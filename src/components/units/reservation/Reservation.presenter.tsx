import SearchRoomCheckInDate from "./CheckInDate";
import ReservationSelectBox from "./Reservation.select";
import * as S from "./Reservation.styles";

export default function ReservationUI(props: any) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.StepBar>
          <S.StepNow>01.날짜/매장/테마 선택</S.StepNow>
          <S.Step>02.예약정보 입력</S.Step>
          <S.Step>03.결제하기</S.Step>
          <S.Step>04.예약완료</S.Step>
        </S.StepBar>

        <div>
          <S.SearchBarBox>
            <SearchRoomCheckInDate />

            <ReservationSelectBox />
          </S.SearchBarBox>
          <S.ImageTimeBox>
            <S.ImageBox>
              <S.Image src="/img/theme/네모네모.webp" />
            </S.ImageBox>

            <S.TimeWrapper>
              <S.TwoTimeBox>
                <S.TimeButton onClick={props.onClickMoveToInfo}>
                  11시 30분
                </S.TimeButton>
                <S.TimeButton onClick={props.onClickMoveToInfo}>
                  12시 30분
                </S.TimeButton>
              </S.TwoTimeBox>
              <S.TwoTimeBox>
                <S.TimeButton onClick={props.onClickMoveToInfo}>
                  11시 30분
                </S.TimeButton>
                <S.TimeButton onClick={props.onClickMoveToInfo}>
                  12시 30분
                </S.TimeButton>
              </S.TwoTimeBox>
              <S.TwoTimeBox>
                <S.TimeButton onClick={props.onClickMoveToInfo}>
                  11시 30분
                </S.TimeButton>
                <S.TimeButton onClick={props.onClickMoveToInfo}>
                  12시 30분
                </S.TimeButton>
              </S.TwoTimeBox>
              <S.TwoTimeBox>
                <S.TimeButton onClick={props.onClickMoveToInfo}>
                  11시 30분
                </S.TimeButton>
                <S.TimeButton onClick={props.onClickMoveToInfo}>
                  12시 30분
                </S.TimeButton>
              </S.TwoTimeBox>
            </S.TimeWrapper>
          </S.ImageTimeBox>
        </div>
      </S.Wrapper>
    </S.Container>
  );
}
