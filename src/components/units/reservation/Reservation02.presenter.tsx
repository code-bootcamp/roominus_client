import { useRouter } from "next/router";
import Button01 from "../../commons/buttons/buttonMobile/button1";
import Button02 from "../../commons/buttons/buttonMobile/button2";
import * as S from "./Reservation02.styles";

export default function Reservation02UI(props: any) {
  const router = useRouter();

  const onClickToMove = () => {
    router.push(`/reservation/_id`);
  };
  return (
    <S.Container>
      <S.Wrapper>
        <S.StepBar>
          <S.Step>01.날짜/매장/테마 선택</S.Step>
          <S.Step isActive={props.isActive}>02.예약정보 입력</S.Step>
          <S.Step>03.결제하기</S.Step>
          <S.Step>04.예약완료</S.Step>
        </S.StepBar>
        <S.Info>
          <S.UL>
            <S.Row>
              예약일
              <span>2022년 7월 10일 수요일</span>
            </S.Row>

            <S.Row>
              시간
              <span>11시 30분</span>
            </S.Row>
            <S.Row>
              테마명 <span>월야애담</span>
            </S.Row>
            <S.Row>
              예약자
              <input type="text" />
            </S.Row>
            <S.Row>
              연락처
              <input type="text" />
            </S.Row>
            <S.Row>
              인원
              <select>
                <option disabled selected>
                  인원을 선택해주세요
                </option>

                <option>1명</option>
                <option>2명</option>
                <option>3명</option>
                <option>4명</option>
                <option>5명</option>
              </select>
            </S.Row>
            <S.Row>
              테마가격
              <span>44000원</span>
            </S.Row>
            <S.Row>
              적립금
              <input type="checkbox" />
              <input type="text" />
            </S.Row>
            <S.Row>최종 결제 가격</S.Row>
            <S.Row>
              결제방식 <span>신용카드</span>
            </S.Row>
          </S.UL>
        </S.Info>

        <S.NotionBox>
          <span>이용안내</span>
          <span>
            o 입장 전 설명을 위해 플레이타임 시작 10분 전까지 매장에 도착해
            주세요. 정시 입장이 어려운 경우, 다음 예약자에게 피해가 가지 않도록
            시간이 차감될 수 있습니다. o 건물 앞 주차 가능 대수는 6대입니다.
            주차가 어려울 수 있으니 도보 이용 바랍니다. o 예약취소는 예약페이지
            하단 '예약확인'메뉴에서 가능합니다. o 입장 후에는 어떠한 경우에도
            환불이 불가능합니다. 단, 중대한 사유로 플레이가 중지될 경우 책임
            정도에 따라 일부 환불이 가능합니다. 반드시 직원에게 문의해 주세요.
          </span>
        </S.NotionBox>

        <S.UserInfoBox>
          <div>
            <input type="checkbox" />
            <span> 개인정보 수집에 동의합니다</span>
          </div>

          <span>
            ■ 수집하는 개인정보 항목 소우주는 상담, 서비스 신청 등등을 위해
            아래와 같은 개인정보를 수집하고 있습니다. ο 수집항목 : 이름 ,
            휴대전화번호 ο 개인정보 수집방법 : 홈페이지(예약)
          </span>
        </S.UserInfoBox>
        <S.buttonWrapper>
          <Button01 name="돌아가기" />
          <button onClick={onClickToMove}>결제</button>
        </S.buttonWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
