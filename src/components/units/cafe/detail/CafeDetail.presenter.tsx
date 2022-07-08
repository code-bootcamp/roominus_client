import * as S from "./CafeDetail.styles";
import ListTheme from "./card/ListTheme";
import MenuTabs from "./tabs/Tabs";
import { v4 as uuidv4 } from "uuid";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";

export default function CafeDetailUI(props) {
  return (
    <S.Container>
      <S.SearchWrapper>
        <S.CafePicture src="/img/cafe/room.webp" />
        <S.InfoBox>
          <S.NamePhoneBox>
            <S.CafeName>엑스케이프</S.CafeName>
            <S.Location>🌏 홍대</S.Location>
            <S.CafePhone>📞 02-123-4567</S.CafePhone>
          </S.NamePhoneBox>
          <S.MenuBox>
            <MenuTabs onChangeKey={props.onChangeKey} />
          </S.MenuBox>
          {props.tabKey === "1" && (
            <S.InfoLocationBox>
              <S.InfoContentsBox>
                <S.ContentsTitle>소개</S.ContentsTitle>
                <S.Contents>
                  엑스케이프 입니다. 오픈기념 특가! 인당 단돈 5,000원!
                  엑스케이프 입니다. 오픈기념 특가! 인당 단돈 5,000원!
                  엑스케이프 입니다. 오픈기념 특가! 인당 단돈 5,000원!
                  엑스케이프 입니다. 오픈기념 특가! 인당 단돈 5,000원!
                </S.Contents>
              </S.InfoContentsBox>
              <div>
                <S.ContentsTitle>위치</S.ContentsTitle>
                <S.Map src="/img/cafe/cafemap.png" />
                {/* <S.LocationBox> */}
                {/* <S.Location>홍대</S.Location> */}
                <S.LocationDetail>
                  서울특별시 홍대구 홍대동 홍대건물 1층
                </S.LocationDetail>
                {/* </S.LocationBox> */}
              </div>
            </S.InfoLocationBox>
          )}
          {props.tabKey === "2" && (
            <S.Theme>
              <S.ContentsTitle>테마</S.ContentsTitle>
              <S.ThemeList>
                {new Array(4).fill(1).map((el) => (
                  <span key={uuidv4()}>
                    <ListTheme />
                  </span>
                ))}
              </S.ThemeList>
            </S.Theme>
          )}
          <S.ButtonBox>
            <WebBlackButton title="목록으로" onClick={props.onClickList} />
          </S.ButtonBox>
        </S.InfoBox>
      </S.SearchWrapper>
    </S.Container>
  );
}
