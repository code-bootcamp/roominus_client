import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import * as S from "../notice/styles";

export default function Notice03() {
  return (
    <>
      <S.Container>
        <S.TitleBox>
          <S.Title>시스템 점검 안내</S.Title>
          <S.HighLighting></S.HighLighting>
        </S.TitleBox>
        <S.ContentsBox>
          <p>
            안녕하십니까. roominus 개발팀입니다.
            <br></br>
            예약시스템의 안정적인 운영을 위하여 아래와 같이 시스템점검을
            실시합니다.<br></br>
            <br></br>- 점검 일시 : 8월3일(수) 20:00 ~ 8월4일(일)20:00 (24시간)
            <br></br>- 점검 사유 : 백업센터 구축 및 예약 시스템 연계작업 서비스{" "}
            <br></br>※ 시스템점검 중 CS 서비스는 진행 됩니다.<br></br>
            <br></br>
            시스템점검 관련하여 문의사항은 카카오톡 채널로 문의주시기바랍니다.
            감사합니다.
          </p>
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
