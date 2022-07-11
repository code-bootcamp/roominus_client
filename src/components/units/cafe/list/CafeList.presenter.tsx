// import Button03 from "../../../commons/buttons/buttonDesktop/button1";
// import Button04 from "../../../commons/buttons/buttonDesktop/button2";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./CafeList.styles";
// import BestCards from "./card/BestCards";
import ListCards from "./card/ListCards";

export default function CafeListUIPage(props) {
  return (
    <S.Container>
      <S.SearchWrapper>
        <S.SearchBox>
          <S.SearchDetailBox>
            <S.DetailBox>
              <S.DetailTitle>장소</S.DetailTitle>
              <S.LocationButton>전체</S.LocationButton>
              <S.LocationButton>강남</S.LocationButton>
              <S.LocationButton>홍대</S.LocationButton>
              <S.LocationButton>건대</S.LocationButton>
            </S.DetailBox>
            <S.DetailBox>
              <S.DetailTitle>매장명</S.DetailTitle>
              <S.DetailContents placeholder="매장을 입력해주세요." />
            </S.DetailBox>
          </S.SearchDetailBox>
          <S.ButtonBox>
            <WebBlackButton title="초기화" />
            <WebPurpleButton title="검색하기" />
          </S.ButtonBox>
        </S.SearchBox>
      </S.SearchWrapper>
      <S.ListWrapper>
        {/* <S.BestListBox>
          <S.BestTitle>지금 가장 HOT한 매장 BEST5</S.BestTitle>
          <S.Etc>
            {new Array(5).fill(1).map((el) => (
              <span key={el}>
                <BestCards />
              </span>
            ))}
          </S.Etc>
        </S.BestListBox> */}

        {/* <S.Line></S.Line> */}

        <S.Flex>
          <S.BestTitle>전체 매장</S.BestTitle>
          <S.Etc>
            {props.data?.fetchCafes.map((el) => (
              <span key={el.id} id={el.id} onClick={props.onClickCard(el)}>
                <ListCards data={props.data} />
              </span>
            ))}
            {/* {new Array(10).fill(1).map((el) => (
              <span key={el} onClick={props.onClickCard}>
                <ListCards />
              </span>
            ))} */}
          </S.Etc>
        </S.Flex>
        <S.MoreButtonBox>
          <S.MoreButton>더보기</S.MoreButton>
        </S.MoreButtonBox>
      </S.ListWrapper>
    </S.Container>
  );
}
