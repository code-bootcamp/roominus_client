import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import * as S from "../notice/styles";

export default function Notice01() {
  return (
    <>
      <S.Container>
        <S.TitleBox>
          <S.Title>8월 신용카드 무이자 할인 안내</S.Title>
          <S.HighLighting></S.HighLighting>
        </S.TitleBox>

        <S.ContentsBox>
          <p>
            2022년 8월 신용카드 결제 무이자 할부 안내
            <br></br> ※ 신용카드 무이자 할부 서비스는 온라인 결제 와 KEY-IN 결제
            에 한하여 제공됩니다.
            <br></br>
            [유의사항] -
            개인사업자/법인/체크/선불/기프트/하이브리드/은행계열카드(카드에
            BC마크가 없는 카드)는 적용 제외 (ex.수협, 제주, 전북카드 등) -
            <br></br>
            직계약 가맹점, 상점부담 무이자 가맹점, 특별제휴가맹점, 오프라인
            가맹점, 신규 가맹점 등 일부는 적용 제외 - 무이자할부 결제 시 포인트,
            마일리지 적립 제외 - <br></br>
            하나카드: PG업종 외 TASF취급 수수료, 환금성, 학원, 면세점, 보험업종
            등의 경우 적용 제외 - <br></br>광주카드: 당사 결제창 내 (무)표기가
            되지 않더라도 5만원 이상 2~3개월 무이자 적용 - <br></br>온라인
            PG업종에 해당하는 무이자로 이 외 업종의 거래는 적용 제외 (제약,
            등록금, 도시가스 등) -<br></br>본 행사는 카드사 사정에 따라 변경
            또는 중단될 수 있음
          </p>

          <S.NoticeImage
            src={
              "https://res.cloudinary.com/dop5piuwp/image/upload/v1659681743/public/mypage/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-08-05_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.29.01_ppqgqn.png"
            }
          />
        </S.ContentsBox>

        <S.ButtonBox>
          <Link href={"/home"}>
            <a>
              <WebBlackButton type="button" title="돌아가기" />
            </a>
          </Link>
        </S.ButtonBox>
      </S.Container>
    </>
  );
}
