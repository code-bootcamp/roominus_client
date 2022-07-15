import * as S from "./reservationNotice.styles";
import Typewriter from "typewriter-effect";

export default function ReservationNoticeUI() {
  return (
    <S.Container>
      <S.TitleBox>
        <h1>예약 절차 안내</h1>
      </S.TitleBox>

      <S.Wrapper>
        <S.StepBoxs>
          <S.StepBox>
            <S.Step>
              <S.StepNumber>STEP1</S.StepNumber>
              <S.Guide>
                테마 & 매장 & <br></br> 날짜 선택
              </S.Guide>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.png" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <S.StepNumber>STEP2</S.StepNumber>
              <S.Guide>
                방문 시간과 <br></br> 인원 선택
              </S.Guide>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.png" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <S.StepNumber>STEP3</S.StepNumber>
              <S.Guide>
                결제 금액 확인 및 <br></br>적립금 사용
              </S.Guide>
            </S.Step>
          </S.StepBox>
        </S.StepBoxs>

        <S.StepBoxs>
          <S.StepBox>
            <S.Step>
              <S.StepNumber>STEP4</S.StepNumber>

              <S.Guide>예약 정보 입력</S.Guide>
              <S.Guide>예약자 명과 번호</S.Guide>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.png" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <S.StepNumber>STEP5</S.StepNumber>
              <S.Guide>
                최종금액 <br></br>
                카드 결제
              </S.Guide>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.png" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <S.StepNumber>STEP6</S.StepNumber>
              <S.Guide>
                예약 내역 <br></br>확인 및 취소
              </S.Guide>
            </S.Step>
          </S.StepBox>
        </S.StepBoxs>
      </S.Wrapper>

      <S.SelectGuideBox>
        <S.ThemeGuide>테마를 선택해 주세요!</S.ThemeGuide>

        {/* <S.RecommendationBox>
          <S.ThemeGuide>오늘은</S.ThemeGuide>
          <S.TypingBox>
            <Typewriter
              options={{
                strings: ["힘내세요"],
                autoStart: true,
                loop: true,
              }}
            />
          </S.TypingBox>

          <S.ThemeGuide>해볼까?</S.ThemeGuide>
        </S.RecommendationBox> */}
      </S.SelectGuideBox>
    </S.Container>
  );
}
