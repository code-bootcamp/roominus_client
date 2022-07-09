import SearchRoomCheckInDate from "./CheckInDate";
import RoomSelectBox from "./Reservation.select";
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

        <S.SearchBarBox>
          <div>
            <span>날짜선택</span>
            <SearchRoomCheckInDate />
          </div>

          <RoomSelectBox />
        </S.SearchBarBox>
        <S.ImageInfoBox>
          <S.ImageBox>
            <S.Image src="/img/theme/네모네모.webp" />
          </S.ImageBox>
          <div>
            <S.InfoBox>
              <S.ThemeInfoBox>
                <S.ThemeTitle>작품명</S.ThemeTitle>
                <S.ThemeInfo>|</S.ThemeInfo>
                <S.ThemeInfo>매장</S.ThemeInfo>
              </S.ThemeInfoBox>

              <S.ThemeInfoBox>
                <S.ThemeInfo>인원</S.ThemeInfo>
                <S.ThemeInfo>난이도</S.ThemeInfo>
                <S.ThemeInfo>플레이 시간</S.ThemeInfo>
              </S.ThemeInfoBox>
            </S.InfoBox>
            <S.TimeWrapper>
              <S.TimeButton onClick={props.onClickMoveToInfo}>
                11시 30분
              </S.TimeButton>
              <S.TimeButton onClick={props.onClickMoveToInfo}>
                12시 30분
              </S.TimeButton>

              <S.TimeButton onClick={props.onClickMoveToInfo}>
                11시 30분
              </S.TimeButton>
              <S.TimeButton onClick={props.onClickMoveToInfo}>
                12시 30분
              </S.TimeButton>

              <S.TimeButton onClick={props.onClickMoveToInfo}>
                11시 30분
              </S.TimeButton>
              <S.TimeButton disabled onClick={props.onClickMoveToInfo}>
                <S.TimeButtonLabel>
                  <S.Time>3시 30분</S.Time>
                  <S.Status>예약마감</S.Status>
                </S.TimeButtonLabel>
              </S.TimeButton>

              <S.TimeButton onClick={props.onClickMoveToInfo}>
                11시 30분
              </S.TimeButton>
              <S.TimeButton onClick={props.onClickMoveToInfo}>
                12시 30분
              </S.TimeButton>
            </S.TimeWrapper>
          </div>
        </S.ImageInfoBox>
      </S.Wrapper>
    </S.Container>
  );
}
