import { useRouter } from "next/router";
import { useState } from "react";
import WebSmallPurpleButton from "../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import WebSmallBlackButton from "../../commons/buttons/buttonDesktop/WebSmallBlackButton";
import * as S from "./ReservationInfo.styles";

export default function ReservationInfoUI(props: any) {
  const router = useRouter();
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [usePoint, setUsePoint] = useState(0);

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

  const onChangePoint = (event) => {
    setUsePoint(event.target.value);
    setTotalPrice(price - usePoint);
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
        <S.InfoForm>
          <S.Row>
            <label>예약일</label>
            <input type="text" style={{ border: "none" }} readOnly />
          </S.Row>
          <S.Row>
            <label>매장</label>
            <input type="text" style={{ border: "none" }} readOnly />
          </S.Row>{" "}
          <S.Row>
            <label>테마</label>
            <input type="text" style={{ border: "none" }} readOnly />
          </S.Row>{" "}
          <S.Row>
            <label>예약일시</label>
            <input type="text" style={{ border: "none" }} readOnly />
          </S.Row>
          <S.Row>
            <label>예약자명</label>
            <input type="text" style={{ border: "1px solid gray" }} />
          </S.Row>
          <S.Row>
            <label>연락처</label>
            <input type="text" style={{ border: "1px solid gray" }} />
          </S.Row>
          <S.Row>
            <label>인원</label>
            <select onChange={onChangePrice} style={{ textAlign: "center" }}>
              <option disabled selected>
                {" "}
                인원을 선택해주세요
              </option>
              <option value={22000}>1</option>
              <option value={40000}>2</option>
              <option value={58000}>3</option>
              <option value={70000}>4</option>
              <option value={80000}>5</option>
            </select>
          </S.Row>
          <S.Row>
            <label>메모</label>
            <input type="text" style={{ border: "1px solid gray" }} />
          </S.Row>
          <S.Row>
            <label>테마 가격</label>
            <input
              type="text"
              style={{ border: "none" }}
              readOnly
              value={price}
            />
          </S.Row>
          <S.Row>
            <label>적립금</label>
            <S.Input
              type="number"
              style={{ border: "1px solid gray", width: "100px" }}
              min="0"
              max="5"
              onChange={onChangePoint}
            />
          </S.Row>
          <S.Row>
            <label>최종 결제 금액 </label>
            <input
              type="text"
              style={{ border: "none" }}
              readOnly
              value={totalPrice}
            />
          </S.Row>
          <S.NotionBox>
            <S.Data>이용안내</S.Data>
            <S.Data>
              o 입장 전 설명을 위해 플레이타임 시작 10분 전까지 매장에 도착해
              주세요. 정시 입장이 어려운 경우, 다음 예약자에게 피해가 가지
              않도록 시간이 차감될 수 있습니다. o 매장 근처 주차가 어려울 수
              있으니 도보 이용 바랍니다. o 예약취소는 예약확인 메뉴에서
              가능합니다. o 입장 후에는 어떠한 경우에도 환불이 불가능합니다. 단,
              중대한 사유로 플레이가 중지될 경우 책임 정도에 따라 일부 환불이
              가능합니다. 반드시 매장에 문의해 주세요.
            </S.Data>
          </S.NotionBox>
          <S.UserInfoBox>
            <S.CheckBox>
              <input type="checkbox" />
              <S.Data> 개인정보 수집에 동의합니다</S.Data>
            </S.CheckBox>

            <S.Data>
              ■ 수집하는 개인정보 항목 : 룸인어스는 상담, 서비스 신청 등등을
              위해 아래와 같은 개인정보를 수집하고 있습니다. ο 수집항목 : 이름 ,
              휴대전화번호 ο 개인정보 수집방법 : 홈페이지(예약)
            </S.Data>
          </S.UserInfoBox>
          <S.buttonWrapper>
            <WebSmallBlackButton
              title="돌아가기"
              type="reset"
              onClick={onClickToMoveMain}
            >
              돌아가기
            </WebSmallBlackButton>
            <WebSmallPurpleButton
              type="submit"
              title="결제하기"
              onClick={onClickToMoveSuccess}
            ></WebSmallPurpleButton>
          </S.buttonWrapper>
        </S.InfoForm>
      </S.Wrapper>
    </S.Container>
  );
}
