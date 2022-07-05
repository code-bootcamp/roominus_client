import * as S from "./CafeList.styles";

export default function CafeListUIPage() {
  return (
    <S.Container>
      <S.SearchWrapper>
        <S.SearchBox>
          <S.SearchDetailBox>
            <S.DetailBox>
              <S.DetailTitle>장소</S.DetailTitle>
              <S.DetailContents placeholder="강남, 홍대, 건대" />
            </S.DetailBox>
            <S.DetailBox>
              <S.DetailTitle>매장명</S.DetailTitle>
              <S.DetailContents placeholder="매장을 입력해주세요." />
            </S.DetailBox>
          </S.SearchDetailBox>
          <div>
            <button>초기화</button>
            <button>검색하기</button>
          </div>
        </S.SearchBox>
      </S.SearchWrapper>
      <S.ListWrapper>
        <div>sdfsd</div>
        <div>sdfsd</div>
        <div>sdfsd</div>
        <div>sdfsd</div>
        <div>sdfsd</div>v<div>sdfsd</div>
        <div>sdfsd</div>
        <div>sdfsd</div>
        <div>sdfsd</div>
      </S.ListWrapper>
    </S.Container>
  );
}
