import Link from "next/link";
import * as S from "./ReservationSuccess.styles";
import { GiTicket } from "react-icons/Gi";
import WebBlackButton from "../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../commons/buttons/buttonDesktop/WebPurpleButton";

export default function ReservationSuccessUI() {
  return (
    <S.Container>
      <S.TitleBox>
        <S.ContainerTitle>예약이 완료되었습니다</S.ContainerTitle>
      </S.TitleBox>

      <S.Wrapper>
        <S.TicketTitleBox>
          <GiTicket size={40} />
          <S.Title>TICKET</S.Title>
          <GiTicket size={40} />
        </S.TicketTitleBox>
        <S.IamgeDataBox>
          <>
            <S.Image src="/img/theme/월야애담.jpeg" />
          </>
          <S.DataBox>
            <h3>월야애담</h3>
            <span>예약자 : 홍길동</span>
            <span>인원 : 3인</span>
            <span>매장 : 홍대1호점</span>
            <span>결제금액: 50000원</span>
            <span>2022.07.29.금 17:30</span>
            <span>12342R34233413</span>
          </S.DataBox>
        </S.IamgeDataBox>

        <>
          <S.Barcode></S.Barcode>
        </>
      </S.Wrapper>

      <S.NotionArea>
        <S.NoticeTitle> NOTICE </S.NoticeTitle>
        <S.NoticeBoxs>
          <S.NoticeBox>
            <>
              <S.NoticeImg src="/img/reservation/notice01.png" />
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
              <S.NoticeImg src="/img/reservation/notice02.png" />
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
              <S.NoticeImg src="/img/reservation/notice03.png" />
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
              <S.NoticeImg src="/img/reservation/notice04.png" />
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
        <Link href={"/"}>
          <WebBlackButton type="button" title="취소하기" />
        </Link>

        <Link href={"/mypage"}>
          <WebPurpleButton type="button" title="목록으로" />
        </Link>
      </S.ButtonWrapper>
    </S.Container>
  );
}
