import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import * as S from "../agreement/styles";

export default function Youth() {
  return (
    <>
      <S.Container>
        <S.TitleBox>
          <S.Title>청소년 보호 정책</S.Title>
          <S.HighLighting></S.HighLighting>
        </S.TitleBox>
        <S.ContentsBox>
          <p>
            roominus 주식회사(이하 “회사”라 합니다)는 각종 청소년 유해정보로부터
            청소년을 보호하기 위해 ‘정보통신망 이용촉진 및 정보보호 등에 관한
            법률에서 정한 청소년 보호정책을 시행하고 있습니다. 본 청소년
            보호정책을 통하여 회사가 청소년보호를 위해 어떠한 조치를
            취하고있는지 알려드립니다.
            <br></br> <br></br> 1. 청소년 보호정책 수립 회사는 청소년이
            유해정보에 노출되지 않고 안전하게 인터넷을 이용할 수 있는 서비스를
            제공하기 위해 청소년 보호정책을 수립, 명시하고 있습니다. <br></br>
            <br></br>2. 유해정보에 대한 청소년 접근제한 및 관리조치 회사는
            청소년이 아무런 제한장치 없이 청소년 유해정보에 노출되지 않도록
            별도의 인증장치를 마련, 적용하며 청소년 유해정보가 노출되지 않기
            위한 예방차원의 조치를 강구합니다. <br></br>
            <br></br>
            3. 유해정보로부터의 청소년보호를 위한 업무 담당자 교육 시행 회사는
            청소년보호담당자 및 각 서비스 담당자를 대상으로 청소년보호 관련 법령
            및 제재기준, 유해정보 발견 시 대처방법, 위반사항 처리에 대한
            보고절차 등을 교육하고 있습니다.
            <br></br> <br></br>4. 유해정보로 인한 피해상담 및 고충처리 회사는
            청소년 유해정보로 인한 피해상담 및 고충처리를 위한 전문인력을
            배치하여 그 피해가 확산되지 않도록 하고 있습니다. 이용자 분들께서는
            하단에 명시한 {"'"}4. 청소년보호 책임자 및 담당자의 지정{"'"} 항을
            참고하여 전화나 메일을 통하여 피해상담 및 고충처리를 요청할 수
            있습니다. <br></br> <br></br>5. 청소년보호 책임자 및 담당자의 지정
            회사는 아래와 같이 청소년 보호 책임자 및 청소년 보호 담당자를
            지정하여 청소년 수립하는 등 청소년보호업무를 수행하고 있습니다.
            청소년 보호 책임자 E-mail:dev.team05.roominus@gmail.com
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
