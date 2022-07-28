import * as S from "../reservationSuccess/ReservationSuccess.styles";

export default function SuccessNotice() {
  return (
    <S.NotionArea>
      <S.NoticeTitle> NOTICE </S.NoticeTitle>
      <S.NoticeBoxes>
        <S.NoticeBox>
          <>
            <S.NoticeImg src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990938/public/reservation/notice01_ehla0g.webp" />
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
            <S.NoticeImg src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990938/public/reservation/notice02_bshcwk.webp" />
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
            <S.NoticeImg src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990938/public/reservation/notice03_krjy2b.webp" />
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
            <S.NoticeImg src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990938/public/reservation/notice04_wh0jzu.webp" />
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
      </S.NoticeBoxes>
    </S.NotionArea>
  );
}
