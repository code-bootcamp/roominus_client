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
import { Idata, IReservationNotice } from "./reservationNotice.types";
import Typewriter from "typewriter-effect";

export default function ReservationNotice(props: IReservationNotice) {
  const list = props?.data?.map((el: Idata) => el.title);

  return (
    <S.Container>
      <S.TitleBox>
        <FormOutlined style={{ marginBottom: "0.8em" }} />
        <h1>예약 안내</h1>
      </S.TitleBox>

      <S.Wrapper>
        <S.StepBoxs>
          <S.StepBox>
            <S.Step>
              <HeartOutlined style={{ color: "#4a00e0", fontSize: "1.3em" }} />
              <h6>step1</h6>
              <h4>테마 선택</h4>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.webp" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <ShopOutlined style={{ color: "#4a00e0", fontSize: "1.3em" }} />
              <h6>step2</h6>

              <h4>매장 선택</h4>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.webp" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <CalendarOutlined
                style={{ color: "#4a00e0", fontSize: "1.3em" }}
              />
              <h6>step3</h6>

              <h4>날짜 선택</h4>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.webp" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <ClockCircleOutlined
                style={{ color: "#4a00e0", fontSize: "1.3em" }}
              />
              <h6>step4</h6>

              <h4>시간 선택</h4>
            </S.Step>
          </S.StepBox>
        </S.StepBoxs>
        <S.StepBoxs>
          <S.StepBox>
            <S.Step>
              <TeamOutlined style={{ color: "#4a00e0", fontSize: "1.3em" }} />
              <h6>step5</h6>
              <h4>인원 선택</h4>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.webp" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <PercentageOutlined
                style={{ color: "#4a00e0", fontSize: "1.3em" }}
              />
              <h6>step6</h6>
              <h4>적립금 사용</h4>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.webp" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <CreditCardOutlined
                style={{ color: "#4a00e0", fontSize: "1.3em" }}
              />
              <h6>step7</h6>
              <h4>카드 결제</h4>
            </S.Step>
            <S.Arrow src="/img/reservation/arrow.webp" />
          </S.StepBox>
          <S.StepBox>
            <S.Step>
              <CheckSquareOutlined
                style={{ color: "#4a00e0", fontSize: "1.3em" }}
              />
              <h6>step8</h6>
              <h4>예약 확인</h4>
            </S.Step>
          </S.StepBox>
        </S.StepBoxs>
      </S.Wrapper>

      <S.SelectGuideBox>
        <S.ThemeGuide>테마를 선택해 주세요!</S.ThemeGuide>

        <S.RecommendationBox>
          <S.ThemeGuide>오늘은</S.ThemeGuide>
          <S.TypingBox>
            <Typewriter
              options={{
                strings: list,
                autoStart: true,
                loop: true,
              }}
            />
          </S.TypingBox>
          <S.ThemeGuide>해볼까요?</S.ThemeGuide>
        </S.RecommendationBox>
      </S.SelectGuideBox>
    </S.Container>
  );
}
