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
          <S.ButtonBox>
            <S.Button>초기화</S.Button>
            <S.Button>검색하기</S.Button>
          </S.ButtonBox>
        </S.SearchBox>
      </S.SearchWrapper>
      <S.ListWrapper>
        <S.BestListBox>
          <S.BestTitle>지금 가장 HOT한 매장 BEST3</S.BestTitle>
          <S.BestBoxs>
            <S.BestBox>
              <S.BestCafe>
                <S.Rank>1</S.Rank>
                <S.BestCafeDetail>
                  <S.BestCafePicture src="/img/cafe/thecode.webp" />
                  <S.BestCafeName>THE CODE</S.BestCafeName>
                </S.BestCafeDetail>
              </S.BestCafe>
            </S.BestBox>
            <S.BestBox>
              <S.BestCafe>
                <S.Rank>1</S.Rank>
                <S.BestCafeDetail>
                  <S.BestCafePicture src="./img/cafe/thecode.webp" />
                  <S.BestCafeName>THE CODE</S.BestCafeName>
                </S.BestCafeDetail>
              </S.BestCafe>
            </S.BestBox>
            <S.BestBox>
              <S.BestCafe>
                <S.Rank>1</S.Rank>
                <S.BestCafeDetail>
                  <S.BestCafePicture src="./img/cafe/thecode.webp" />
                  <S.BestCafeName>THE CODE</S.BestCafeName>
                </S.BestCafeDetail>
              </S.BestCafe>
            </S.BestBox>
          </S.BestBoxs>
        </S.BestListBox>
        <S.Line></S.Line>
        <S.BestBoxs>
          <S.BestBox>
            <S.BestCafe>
              <S.Location>홍대</S.Location>
              <S.BestCafeDetail>
                <S.BestCafePicture src="./img/cafe/thecode.webp" />
                <S.BestCafeName>THE CODE</S.BestCafeName>
              </S.BestCafeDetail>
            </S.BestCafe>
          </S.BestBox>
          <S.BestBox>
            <S.BestCafe>
              <S.Location>홍대</S.Location>
              <S.BestCafeDetail>
                <S.BestCafePicture src="./img/cafe/thecode.webp" />
                <S.BestCafeName>THE CODE</S.BestCafeName>
              </S.BestCafeDetail>
            </S.BestCafe>
          </S.BestBox>
          <S.BestBox>
            <S.BestCafe>
              <S.Location>홍대</S.Location>
              <S.BestCafeDetail>
                <S.BestCafePicture src="./img/cafe/thecode.webp" />
                <S.BestCafeName>THE CODE</S.BestCafeName>
              </S.BestCafeDetail>
            </S.BestCafe>
          </S.BestBox>
        </S.BestBoxs>
        <S.BestBoxs>
          <S.BestBox>
            <S.BestCafe>
              <S.Location>홍대</S.Location>
              <S.BestCafeDetail>
                <S.BestCafePicture src="./img/cafe/thecode.webp" />
                <S.BestCafeName>THE CODE</S.BestCafeName>
              </S.BestCafeDetail>
            </S.BestCafe>
          </S.BestBox>
          <S.BestBox>
            <S.BestCafe>
              <S.Location>홍대</S.Location>
              <S.BestCafeDetail>
                <S.BestCafePicture src="./img/cafe/thecode.webp" />
                <S.BestCafeName>THE CODE</S.BestCafeName>
              </S.BestCafeDetail>
            </S.BestCafe>
          </S.BestBox>
          <S.BestBox>
            <S.BestCafe>
              <S.Location>홍대</S.Location>
              <S.BestCafeDetail>
                <S.BestCafePicture src="./img/cafe/thecode.webp" />
                <S.BestCafeName>THE CODE</S.BestCafeName>
              </S.BestCafeDetail>
            </S.BestCafe>
          </S.BestBox>
        </S.BestBoxs>

        <S.MoreButtonBox>
          <S.MoreButton>▽ 더보기</S.MoreButton>
        </S.MoreButtonBox>
      </S.ListWrapper>
    </S.Container>
  );
}
