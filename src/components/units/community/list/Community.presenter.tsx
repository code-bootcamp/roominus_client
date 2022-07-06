import * as S from "./Community.styles";

export default function CommunityListUI() {
  return (
    // <S.Container>
    <S.Wrapper>
      <S.Title>탈출인증게시판</S.Title>
      <S.ItemBox>
        <S.ItemBackground>
          <S.Picture src="/img/community/board.png" />
          <S.NamePickBox>
            <S.BoardName>제목입니다</S.BoardName>
            <S.Pick>♥</S.Pick>
          </S.NamePickBox>
        </S.ItemBackground>
        <S.ItemBackground>
          <S.Picture src="/img/community/board.png" />
          <S.NamePickBox>
            <S.BoardName>제목입니다</S.BoardName>
            <S.Pick>♥</S.Pick>
          </S.NamePickBox>
        </S.ItemBackground>
      </S.ItemBox>
      <S.ItemBox>
        <S.ItemBackground>
          <S.Picture src="/img/community/board.png" />
          <S.NamePickBox>
            <S.BoardName>제목입니다</S.BoardName>
            <S.Pick>♥</S.Pick>
          </S.NamePickBox>
        </S.ItemBackground>
        <S.ItemBackground>
          <S.Picture src="/img/community/board.png" />
          <S.NamePickBox>
            <S.BoardName>제목입니다</S.BoardName>
            <S.Pick>♥</S.Pick>
          </S.NamePickBox>
        </S.ItemBackground>
      </S.ItemBox>

      <S.Button>작성하기</S.Button>
      <S.Pagination>◁ 1 2 3 4 5 6 7 8 9 10 ▷</S.Pagination>
    </S.Wrapper>
    // </S.Container    >
  );
}
