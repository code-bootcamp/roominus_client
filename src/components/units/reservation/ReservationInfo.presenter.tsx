import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./ReservationInfo.styles";

export default function ReservationInfoUI(props: any) {
  const router = useRouter();
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const onClickToMoveSuccess = () => {
    router.push(`/reservation/_id`);
  };

  const onClickToMoveMain = () => {
    router.push(`/reservation/_id`);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
    setTotalPrice(event.target.value);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.StepBar>
          <S.Step>01.날짜/매장/테마 선택</S.Step>
          <S.StepNow>02.예약정보 입력</S.StepNow>
          <S.Step>03.결제하기</S.Step>
          <S.Step>04.예약완료</S.Step>
        </S.StepBar>
        <S.Info>
          <S.UL>
            <S.Row>
              <S.info>예약일</S.info>
              <S.Data>2022년 7월 10일 수요일</S.Data>
            </S.Row>

            <S.Row>
              <S.info>시간</S.info>
              <S.Data>11시 30분</S.Data>
            </S.Row>
            <S.Row>
              <S.info>테마명</S.info>
              <S.Data>월야애담</S.Data>
            </S.Row>
            <S.Row>
              <S.info>예약자</S.info>
              <input type="text" />
            </S.Row>
            <S.Row>
              <S.info>연락처</S.info>
              <input type="text" /> - <input type="text" /> -{" "}
              <input type="text" />
            </S.Row>
            <S.Row>
              <S.info>인원</S.info>
              <select onChange={onChangePrice}>
                <option disabled selected>
                  인원을 선택해주세요
                </option>
                <option value={24000}>1명</option>
                <option value={42000}>2명</option>
                <option value={70000}>3명</option>
                <option value={80000}>4명</option>
              </select>
            </S.Row>
            <S.Row>
              <S.info>테마가격</S.info>
              <span>{price}</span>
            </S.Row>
            <S.Row>
              <S.info>적립금</S.info>
              <input type="checkbox" />
              <input type="text" />
            </S.Row>
            <S.Row>
              <S.info>최종결제가격</S.info>
              <span>{totalPrice}</span>
            </S.Row>
            <S.Row>
              <S.info>결제방식</S.info>
              <S.Data>신용카드</S.Data>
            </S.Row>
          </S.UL>
        </S.Info>

        <S.NotionBox>
          <S.Data>이용안내</S.Data>
          <S.Data>
            o 입장 전 설명을 위해 플레이타임 시작 10분 전까지 매장에 도착해
            주세요. 정시 입장이 어려운 경우, 다음 예약자에게 피해가 가지 않도록
            시간이 차감될 수 있습니다. o 건물 앞 주차 가능 대수는 6대입니다.
            주차가 어려울 수 있으니 도보 이용 바랍니다. o 예약취소는 예약페이지
            하단 "예약확인"메뉴에서 가능합니다. o 입장 후에는 어떠한 경우에도
            환불이 불가능합니다. 단, 중대한 사유로 플레이가 중지될 경우 책임
            정도에 따라 일부 환불이 가능합니다. 반드시 직원에게 문의해 주세요.
          </S.Data>
        </S.NotionBox>

        <S.UserInfoBox>
          <S.CheckBox>
            <input type="checkbox" />
            <S.Data> 개인정보 수집에 동의합니다</S.Data>
          </S.CheckBox>

          <S.Data>
            ■ 수집하는 개인정보 항목 소우주는 상담, 서비스 신청 등등을 위해
            아래와 같은 개인정보를 수집하고 있습니다. ο 수집항목 : 이름 ,
            휴대전화번호 ο 개인정보 수집방법 : 홈페이지(예약)
          </S.Data>
        </S.UserInfoBox>
        <S.buttonWrapper>
          <button onClick={onClickToMoveMain}>돌아가기</button>
          <button onClick={onClickToMoveSuccess}>결제하기</button>
        </S.buttonWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
