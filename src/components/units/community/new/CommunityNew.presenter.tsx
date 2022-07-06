import * as S from "./CommunityNew.styles";

export default function CommunityNewUI() {
  return (
    <S.Wrapper>
      <S.Title>인증 게시물 등록</S.Title>
      <S.InfoBackground>
        <S.InfoBox>
          <S.InfoTitle>
            제목 <S.Essential>*</S.Essential>
          </S.InfoTitle>
          <S.InfoInput placeholder="제목을 입력해주세요" />
        </S.InfoBox>
        <S.InfoBox>
          <S.InfoTitle>
            내용 <S.Essential>*</S.Essential>
          </S.InfoTitle>
          <S.WebEditor>
            토스트 editor 들어가는 부분이고 토스트도 먹고 싶다
          </S.WebEditor>
        </S.InfoBox>
        <S.ButtonBox>
          <S.Button>목 록</S.Button>
          <S.Button>등 록</S.Button>
        </S.ButtonBox>
      </S.InfoBackground>
    </S.Wrapper>
  );
}
