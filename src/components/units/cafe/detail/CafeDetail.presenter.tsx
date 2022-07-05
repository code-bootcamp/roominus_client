import * as S from "./CafeDetail.styles";

export default function CafeDetailUI() {
  return (
    <S.Container>
      <S.SearchWrapper>
        <S.CafePicture>매장사진</S.CafePicture>
        <S.InfoBox>
          <S.NamePhoneBox>
            <S.CafeName>검은 오솔길 3호점</S.CafeName>
            <S.CafePhone>02-123-4567</S.CafePhone>
          </S.NamePhoneBox>
          <S.MenuBox>
            <S.Button>매장 소개</S.Button>
            <S.Button>테마</S.Button>
          </S.MenuBox>
          <S.InfoContentsBox>
            <S.ContentsTitle>소개</S.ContentsTitle>
            <S.Contents>
              검은 오솔길 3호점 입니다. 새로 오픈했어요~~^^
            </S.Contents>
          </S.InfoContentsBox>
          <S.Map>지도</S.Map>
          <S.LocationBox>
            <S.Location>홍대</S.Location>
            <S.LocationDetail>
              서울특별시 홍대구 홍대동 홍대건물 1층
            </S.LocationDetail>
          </S.LocationBox>
        </S.InfoBox>
      </S.SearchWrapper>
    </S.Container>
  );
}
