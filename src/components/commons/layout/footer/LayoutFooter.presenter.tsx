import TopButton from "../../buttons/topbutton";
import * as S from "./LayoutFooter.styles";

export default function LayoutFooterUI(props: any) {
  return (
    <S.Container>
      <S.Wrapper>
        <TopButton />
        <S.MenuInfoWrapper>
          <S.MenuWrapper>
            <S.Menu>회사소개</S.Menu>
            <S.Menu>이용약관</S.Menu>
            <S.Menu>개인정보처리 방침</S.Menu>
            <S.Menu>청소년 보호 정책</S.Menu>
            <S.Menu>법적고지</S.Menu>
            <S.Menu>고객센터</S.Menu>
          </S.MenuWrapper>
          <S.InfoWrapper>
            <S.Info>
              (주) Ruminus | 대표: 5조 일동 | 고객센터 1234-5678 (평일
              09:00~18:00 / 점심시간 13:00~14:00 / 주말 및 공휴일 휴무)
            </S.Info>
            <S.Info>
              사업장 주소: 서울시 구로구 패스트파이브 13층 코드캠프 (우) 12345 |
              사업자등록번호: 000-00-00000
            </S.Info>
            <S.Info>
              통신판매업신고 중구 제00000호 | 개인정보보호책임자:손은채
            </S.Info>
          </S.InfoWrapper>
          <S.ContactWrapperMobile>
            <S.Contact>Contact Us</S.Contact>
            <S.ContactIcon />
          </S.ContactWrapperMobile>
        </S.MenuInfoWrapper>
        <S.ContactWrapper>
          <S.Contact>Contact Us</S.Contact>
          <S.ContactIcon />
        </S.ContactWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
