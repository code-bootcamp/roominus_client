import Link from "next/link";
import * as S from "./ReservationSuccess.styles";
import { QRCodeSVG } from "qrcode.react";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import { IReservationSuccessUI } from "./ReservationSuccess.types";

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
                  size={80}
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

      <S.NotionArea>
        <S.NoticeTitle> NOTICE </S.NoticeTitle>
        <S.NoticeBoxs>
          <S.NoticeBox>
            <>
              <S.NoticeImg src="/img/reservation/notice01.webp" />
            </>
            <S.Notice>
              <S.NoticeSubject>10분전 도착</S.NoticeSubject>
              <S.NoticeDescription>
                원활한 게임을 위해
                <br></br>
                예약시간 10분전에 도착하여
                <br></br>
                사전안내를 받으셔야 합니다.
              </S.NoticeDescription>
            </S.Notice>
          </S.NoticeBox>
          <S.NoticeBox>
            <>
              <S.NoticeImg src="/img/reservation/notice02.webp" />
            </>
            <S.Notice>
              <S.NoticeSubject>누설금지</S.NoticeSubject>
              <S.NoticeDescription>
                아직 체험하지 않은
                <br></br>
                분들을 위해 문제 공유는
                <br></br>
                삼가해주시기 바랍니다.
              </S.NoticeDescription>
            </S.Notice>
          </S.NoticeBox>
          <S.NoticeBox>
            <>
              <S.NoticeImg src="/img/reservation/notice03.webp" />
            </>
            <S.Notice>
              <S.NoticeSubject>사진 촬영 금지</S.NoticeSubject>
              <S.NoticeDescription>
                컨텐츠 보호를 위해
                <br></br>
                소품이나 인테리어
                <br></br>
                사진 촬영을 금지합니다.
              </S.NoticeDescription>
            </S.Notice>
          </S.NoticeBox>
          <S.NoticeBox>
            <>
              <S.NoticeImg src="/img/reservation/notice04.webp" />
            </>
            <S.Notice>
              <S.NoticeSubject>위험물품 반입금지</S.NoticeSubject>
              <S.NoticeDescription>
                안전을 위해 cctv가
                <br></br>
                설치되어 있습니다.
                <br></br>
                위험물품은 반입 금지입니다.
              </S.NoticeDescription>
            </S.Notice>
          </S.NoticeBox>
        </S.NoticeBoxs>
      </S.NotionArea>
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
