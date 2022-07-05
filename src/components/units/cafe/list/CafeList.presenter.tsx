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
        <div>
          <div>베스트? 제휴업체?</div>
          <div>
            <div>
              <div>1</div>
              <div>
                <div>사진</div>
                <div>매장명</div>
              </div>
            </div>
          </div>
        </div>
        <S.Line></S.Line>
      </S.ListWrapper>
    </S.Container>
  );
}
