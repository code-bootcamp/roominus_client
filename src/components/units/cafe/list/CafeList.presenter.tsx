import * as S from "./CafeList.styles";
import { ICafeListUIProps, IFetchCafesProps } from "./CafeList.types";
import ListCards from "./card/ListCards";
import StoreIcon from "@mui/icons-material/Store";

export default function CafeListUIPage(props: ICafeListUIProps) {
  return (
    <S.Container>
      <S.SearchWrapper>
        <S.SearchBox>
          <S.SearchDetailBox>
            <S.DetailBox>
              <S.DetailTitle>장소</S.DetailTitle>
              <S.LocationButtonTotal
                onClick={props.onClickTotal}
                total={props.total}
              >
                전체
              </S.LocationButtonTotal>
              <S.LocationButtonGangnam
                id="강남"
                onClick={props.onClickGangnam}
                gangnam={props.gangnam}
              >
                강남
              </S.LocationButtonGangnam>
              <S.LocationButtonHongdae
                id="홍대"
                onClick={props.onClickHongdae}
                hongdae={props.hongdae}
              >
                홍대
              </S.LocationButtonHongdae>
              <S.LocationButtonKondae
                id="건대"
                onClick={props.onClickKondae}
                kondae={props.kondae}
              >
                건대
              </S.LocationButtonKondae>
              <S.LocationSelect onChange={props.onChangeLocation}>
                <S.LocationOption value="전체">전체</S.LocationOption>
                <S.LocationOption value="강남">강남</S.LocationOption>
                <S.LocationOption value="홍대">홍대</S.LocationOption>
                <S.LocationOption value="건대">건대</S.LocationOption>
              </S.LocationSelect>
            </S.DetailBox>
            <S.DetailBox>
              <S.DetailTitle>매장명</S.DetailTitle>
              <S.DetailContents placeholder="매장을 입력해주세요." />
            </S.DetailBox>
          </S.SearchDetailBox>
        </S.SearchBox>
      </S.SearchWrapper>
      <S.ListWrapper>
        <S.Flex>
          <S.TitleBox>
            <StoreIcon fontSize="large" />
            <h1>전체 매장</h1>
          </S.TitleBox>
          <S.Etc>
            {props.data?.fetchCafes.map((el: IFetchCafesProps) => (
              <span key={el.id} id={el.id} onClick={props.onClickCard(el)}>
                <ListCards el={el} />
              </span>
            ))}
          </S.Etc>
        </S.Flex>
        <S.MoreButtonBox>
          <S.MoreButton onClick={props.loadFunc}>더보기</S.MoreButton>
        </S.MoreButtonBox>
      </S.ListWrapper>
    </S.Container>
  );
}
