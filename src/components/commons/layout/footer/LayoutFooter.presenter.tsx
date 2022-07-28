import TopButton from "../../buttons/topbutton";
import * as S from "./LayoutFooter.styles";
import Link from "next/link";
import { useRouter } from "next/router";
import KakaoChat from "../../../units/mypage/chat";

const HIDDEN_BUTTON = ["/community/"];

export default function LayoutFooterUI() {
  const router = useRouter();

  const isHiddenButton = HIDDEN_BUTTON.includes(router.asPath);

  return (
    <S.Container>
      <S.Wrapper>
        {!isHiddenButton && <TopButton />}
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

            <Link href={"/customer/contactUs"}>
              <S.Menu>고객지원</S.Menu>
            </Link>
          </S.MenuWrapper>

          <S.InfoWrapper>
            <S.InfoLeftBox>
              <S.InfoTitle>(주) roominus</S.InfoTitle>
              <S.Info>
                대표: 오쪼라고 <br></br>고객센터 1234-5678 <br></br>(평일
                09:00~18:00 / 점심시간 13:00~14:00 / 주말 및 공휴일 휴무){" "}
                <br></br>사업장 주소: 서울시 구로구 디지털로 300 13F (우) 12345{" "}
                <br></br> 사업자등록번호: 000-00-00000 <br></br>
                <br></br>Copyright© roominus(주) All rights reserved.
              </S.Info>
            </S.InfoLeftBox>
            <S.DividedLine />
            <S.InfoRightBox>
              <Link href="/customer/contactUs">
                <S.InfoTitle style={{ cursor: "pointer" }}>
                  1:1 문의하기
                </S.InfoTitle>
              </Link>

              <S.Info>
                소중한 고객님의 의견을 듣습니다.<br></br>
                담당자: 룸인어스 개발팀 <br></br>전자 우편 주소 :
                dev.team05.roominus@gmail.com
              </S.Info>
              <S.ChatBox>
                <KakaoChat />
              </S.ChatBox>

              <S.InfoGithub>
                <Link href="https://github.com/code-bootcamp/f7b3_team05_client">
                  <S.Github />
                </Link>
                <Link href="/home">
                  <S.Logo src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990936/public/layout/graylogo_armmru.webp" />
                </Link>
                <Link href="https://github.com/code-bootcamp/f7b3_team05_server">
                  <S.Github />
                </Link>
              </S.InfoGithub>
            </S.InfoRightBox>
          </S.InfoWrapper>
        </S.MenuInfoWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
