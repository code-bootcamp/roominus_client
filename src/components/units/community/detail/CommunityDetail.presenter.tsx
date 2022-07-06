import * as S from "./CommunityDetail.styles";

export default function CommunityDetailUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Picture src="/img/community/board.png" />
        <S.PickBox>
          <S.PickIcon>❤️</S.PickIcon>
          <S.PickCount>20</S.PickCount>
        </S.PickBox>
        <S.BoardTitle>제목입니다</S.BoardTitle>
        <div>
          보드판 인증게시판 내용입니다. 보드판 인증게시판 내용입니다. 보드판
          인증게시판 내용입니다. 보드판 인증게시판 내용입니다. 보드판 인증게시판
          내용입니다. 보드판 인증게시판 내용입니다. 보드판 인증게시판
          내용입니다. 보드판 인증게시판 내용입니다. 보드판 인증게시판
          내용입니다. 보드판 인증게시판 내용입니다.
        </div>
      </S.Wrapper>
      <S.Comment>댓글컴포넌트 들어갈 부분!!</S.Comment>
      <S.ButtonBox>
        <S.Button>목 록</S.Button>
        <S.Button>수 정</S.Button>
      </S.ButtonBox>
    </S.Container>
  );
}
