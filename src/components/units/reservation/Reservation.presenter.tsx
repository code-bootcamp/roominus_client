import SearchRoomCheckInDate from "./CheckInDate";
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

            <select
              style={{
                textAlign: "center",
                padding: "1em",
                width: "30%",
              }}
            >
              <option disabled selected>
                매장을 선택해주세요
              </option>
              <option value={"건대 1호점"}>건대 1호점</option>
              <option value={"건대 2호점"}>건대 2호점</option>
              <option value={"홍대 1호점"}>홍대 1호점</option>
              <option value={"강남 1호점"}>강남 1호점</option>
            </select>

            <select
              style={{ textAlign: "center", padding: "1em", width: "30%" }}
            >
              <option disabled selected>
                테마를 선택해주세요
              </option>
              <option value={"네모네모마을에는 무슨일이 있었을까?"}>
                네모네모마을에는 무슨일이 있었을까?
              </option>
              <option value={"네모네모마을에는 무슨일이 있었을까?"}>
                네모네모마을에는 무슨일이 있었을까?
              </option>
              <option value={"월야애담"}>월야애담</option>
              <option value={"월야애담"}>월야애담</option>
            </select>
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
