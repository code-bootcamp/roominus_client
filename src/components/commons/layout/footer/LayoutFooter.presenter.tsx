import TopButton from "../../buttons/topbutton";
import * as S from "./LayoutFooter.styles";
import { GithubOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function LayoutFooterUI(props: any) {
  return (
    <S.Container>
      <S.Wrapper>
        <TopButton />

        <S.MenuInfoWrapper>
          <S.MenuWrapper>
            <Link href={"https://www.nipa.kr/main/contents.do?key=228"}>
              <S.Menu>이용약관</S.Menu>
            </Link>
            <Link
              href={
                "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EB%B2%95"
              }
            >
              <S.Menu>개인정보 처리방침</S.Menu>
            </Link>

            <Link
              href={
                "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%B2%AD%EC%86%8C%EB%85%84%EB%B3%B4%ED%98%B8%EB%B2%95"
              }
            >
              <S.Menu>청소년 보호 정책</S.Menu>
            </Link>

            <Link href={"https://github.com/code-bootcamp/f7b3_team05_client"}>
              <S.Menu>고객센터</S.Menu>
            </Link>
          </S.MenuWrapper>

          <S.InfoWrapper>
            <S.InfoLeftBox>
              <S.InfoTitle>
                <Link href={"/admin"}>(주) Roominus</Link>
              </S.InfoTitle>
              <S.Info>
                대표: 오쪼라고| 고객센터 1234-5678 (평일 09:00~18:00 / 점심시간
                13:00~14:00 / 주말 및 공휴일 휴무)
              </S.Info>
              <S.Info>
                사업장 주소: 서울시 구로구 디지털로 300 13F (우) 12345 |
                사업자등록번호: 000-00-00000
              </S.Info>
              <S.Info>개인정보보호책임자:손은채</S.Info>
            </S.InfoLeftBox>
            <S.DividedLine />
            <S.InfoRightBox>
              <S.Info>제휴 문의</S.Info>
              <S.Info>
                담당자: 신만두 <br /> 이메일: hanieatingcarrot@gmail.com
              </S.Info>
              <S.InfoGithub>
                <GithubOutlined
                  style={{ fontSize: "30px", color: "#a3a8b7" }}
                />
                <img
                  src="/img/layout/graylogo.png"
                  style={{ width: "110px" }}
                />
              </S.InfoGithub>
            </S.InfoRightBox>
          </S.InfoWrapper>
        </S.MenuInfoWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
