import Link from "next/link";
import * as S from "./ReservationSuccess.styles";
import { QRCodeSVG } from "qrcode.react";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import { IReservationSuccessUI } from "./ReservationSuccess.types";
import SuccessNotice from "./notice";

export default function ReservationSuccessUI(props: IReservationSuccessUI) {
  const ID = props.data?.fetchReservation.id;

  return (
    <S.Container>
      <S.TitleBox>
        <h1>{props.data?.fetchReservation.status}</h1>
      </S.TitleBox>

      <S.Wrapper ref={props.printRef}>
        <S.IamgeDataBox>
          <>
            <S.Image
              src={props.data?.fetchReservation.theme_menu.theme.mainImg}
            />
          </>
          <S.DataBox>
            <S.ThemeTitleBox>
              <h2>{props.data?.fetchReservation.theme_menu.theme.title}</h2>
              <span>|</span>
              <span>{props.data?.fetchReservation.cafe.name}</span>
            </S.ThemeTitleBox>
            <S.ThemeInfoBox>
              <span>
                참가 인원 |{" "}
                {props.data?.fetchReservation.theme_menu.people_number}명
              </span>
              <span>
                결제 금액 | {props.data?.fetchReservation.theme_menu.price}원
              </span>

              <span>
                탈출일 | {props.data?.fetchReservation.reservation_date}
              </span>
              <span>
                탈출 시간 |{" "}
                {props.data?.fetchReservation.theme_menu.reservation_time} ~
              </span>
              <S.ClearTimeBox>
                <S.ClearTime>
                  소요시간 :{" "}
                  {props.data?.fetchReservation.theme_menu.theme.clearTime}분
                </S.ClearTime>
              </S.ClearTimeBox>
            </S.ThemeInfoBox>

            <S.QRcodeBox>
              <S.QRcode>
                <QRCodeSVG
                  value={props.link}
                  size={100}
                  bgColor={"#ffffff"}
                  fgColor={"#4a00e0e7"}
                  includeMargin={false}
                />
              </S.QRcode>
              <span>{ID?.slice(-12).toUpperCase()}</span>
            </S.QRcodeBox>
          </S.DataBox>
        </S.IamgeDataBox>
      </S.Wrapper>
      <SuccessNotice />

      <S.ButtonWrapper>
        {props.cancellable && (
          <WebBlackButton
            onClick={props.onClickOpenRefundModal}
            type="button"
            title="취소하기"
          />
        )}
        <Link href={"/mypage"}>
          <WebPurpleButton type="button" title="목록으로" />
        </Link>
      </S.ButtonWrapper>
    </S.Container>
  );
}
