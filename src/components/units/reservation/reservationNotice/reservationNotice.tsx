import * as S from "./reservationNotice.styles";
import {
  HeartOutlined,
  ShopOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  TeamOutlined,
  CreditCardOutlined,
  CheckSquareOutlined,
  PercentageOutlined,
  FormOutlined,
} from "@ant-design/icons";
import Typewriter from "typewriter-effect";

export default function ReservationNotice() {
  return (
    <S.Container>
      <S.TitleBox>
        <FormOutlined style={{ marginBottom: "0.5em" }} />
        <h1>예약 안내</h1>
      </S.TitleBox>

      <S.Wrapper>
        <S.StepBoxs>
          <S.StepBox>
            <S.Step>
              <HeartOutlined />
              <h6>step1</h6>
              <h4>테마 선택</h4>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.png" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <ShopOutlined />
              <h6>step2</h6>

              <h4>매장 선택</h4>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.png" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <CalendarOutlined />
              <h6>step3</h6>

              <h4>날짜 선택</h4>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.png" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <ClockCircleOutlined />
              <h6>step4</h6>

              <h4>시간 선택</h4>
            </S.Step>
          </S.StepBox>
        </S.StepBoxs>
        <S.StepBoxs>
          <S.StepBox>
            <S.Step>
              <TeamOutlined />
              <h6>step5</h6>
              <h4>인원 선택</h4>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.png" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <PercentageOutlined />
              <h6>step6</h6>
              <h4>적립금 사용</h4>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.png" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <CreditCardOutlined />
              <h6>step7</h6>
              <h4>카드 결제</h4>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.png" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <CheckSquareOutlined />
              <h6>step8</h6>
              <h4>예약 확인</h4>
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
                strings: ["네모네모", "익명의 여자", "동화나라"],
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
