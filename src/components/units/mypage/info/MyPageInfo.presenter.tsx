import * as S from "./MyPageInfo.styles";

export default function MyPageInfoUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.Label>이름</S.Label>

          <S.Label>이메일</S.Label>

          <S.Label>휴대폰 번호</S.Label>
        </S.InfoWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
