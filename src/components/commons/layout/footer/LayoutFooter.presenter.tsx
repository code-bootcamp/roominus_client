import TopButton from "../../buttons/topbutton";
import * as S from "./LayoutFooter.styles";
import Link from "next/link";
// import KakaoChat from "../../../units/mypage/chat";

export default function LayoutFooterUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <TopButton />
        {/* <KakaoChat /> */}

        <S.MenuInfoWrapper>
          <S.MenuWrapper>
            <Link href={"/customer/agreement/service"}>
              <S.Menu>이용약관</S.Menu>
            </Link>
            <Link href={"/customer/agreement/privacy"}>
              <S.Menu>개인정보 처리방침</S.Menu>
            </Link>

            <Link href={"/customer/agreement/youth"}>
              <S.Menu>청소년 보호 정책</S.Menu>
            </Link>

            <Link href={"https://github.com/code-bootcamp/f7b3_team05_client"}>
              <S.Menu>고객센터</S.Menu>
            </Link>
          </S.MenuWrapper>

          <S.InfoWrapper>
            <S.InfoLeftBox>
              <S.InfoTitle>(주) Roominus</S.InfoTitle>
              <S.Info>
                대표: 오쪼라고 | 고객센터 1234-5678 (평일 09:00~18:00 / 점심시간
                13:00~14:00 / 주말 및 공휴일 휴무) <br></br>사업장 주소: 서울시
                구로구 디지털로 300 13F (우) 12345 | <br></br> 사업자등록번호:
                000-00-00000 <br></br>Copyright© roominus(주) All rights
                reserved.
              </S.Info>
            </S.InfoLeftBox>
            <S.DividedLine />
            <S.InfoRightBox>
              <Link href="/customer/contactUs">
                <S.InfoTitle style={{ cursor: "pointer" }}>
                  문의하기
                </S.InfoTitle>
              </Link>

              <S.Info>
                담당자: 룸인어스 개발팀 <br></br>dev.team05.roominus@gmail.com
              </S.Info>

              <S.InfoGithub>
                <Link href="https://github.com/code-bootcamp/f7b3_team05_server">
                  <S.Github />
                </Link>

                <img
                  src="/img/layout/graylogo.webp"
                  style={{ width: "80px" }}
                />
              </S.InfoGithub>
            </S.InfoRightBox>
          </S.InfoWrapper>
        </S.MenuInfoWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
