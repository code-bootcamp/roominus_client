// import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
// import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./CafeList.styles";
import { ICafeListUIProps, IFetchCafesProps } from "./CafeList.types";
import ListCards from "./card/ListCards";

export default function CafeListUIPage(props: ICafeListUIProps) {
  return (
    <S.Container>
      <S.SearchWrapper>
        <S.SearchBox>
          <S.SearchDetailBox>
            <S.DetailBox>
              <S.DetailTitle>장소</S.DetailTitle>
              <S.LocationButtonTotal
                id="total"
                onClick={props.onClickTotal}
                total={props.total}
              >
                전체
              </S.LocationButtonTotal>
              <S.LocationButtonGangnam
                id="gangnam"
                onClick={props.onClickGangnam}
                gangnam={props.gangnam}
              >
                강남
              </S.LocationButtonGangnam>
              <S.LocationButtonHongdae
                id="hongdae"
                onClick={props.onClickHongdae}
                hongdae={props.hongdae}
              >
                홍대
              </S.LocationButtonHongdae>
              <S.LocationButtonKondae
                id="kondae"
                onClick={props.onClickKondae}
                kondae={props.kondae}
              >
                건대
              </S.LocationButtonKondae>
              <S.LocationSelect>
                <S.LocationOption>전체</S.LocationOption>
                <S.LocationOption>강남</S.LocationOption>
                <S.LocationOption>홍대</S.LocationOption>
                <S.LocationOption>건대</S.LocationOption>
              </S.LocationSelect>
            </S.DetailBox>
            <S.DetailBox>
              <S.DetailTitle>매장명</S.DetailTitle>
              <S.DetailContents placeholder="매장을 입력해주세요." />
            </S.DetailBox>
          </S.SearchDetailBox>
          {/* <S.ButtonBox>
            <WebBlackButton title="초기화" />
            <WebPurpleButton title="검색하기" />
          </S.ButtonBox> */}
        </S.SearchBox>
      </S.SearchWrapper>
      <S.ListWrapper>
        <S.Flex>
          <S.BestTitle>전체 매장</S.BestTitle>
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
