import * as S from "./CafeDetail.styles";
import ListTheme from "./card/ListTheme";
import MenuTabs from "./tabs/Tabs";
import { v4 as uuidv4 } from "uuid";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import { ICafeDetailUI } from "./CafeDetail.types";

export default function CafeDetailUI(props: ICafeDetailUI) {
  return (
    <S.Container>
      <S.SearchWrapper>
        <S.CafePicture src={props.data?.fetchCafe.mainImg} />
        <S.InfoBox>
          <S.NamePhoneBox>
            <S.CafeName>{props.data?.fetchCafe.name}</S.CafeName>
            <S.Location>🌏 {props.data?.fetchCafe.address}</S.Location>
            <S.CafePhone>📞 {props.data?.fetchCafe.phone}</S.CafePhone>
          </S.NamePhoneBox>
          <S.MenuBox>
            <MenuTabs onChangeKey={props.onChangeKey} />
          </S.MenuBox>
          {props.tabKey === "1" && (
            <S.InfoLocationBox>
              <S.InfoContentsBox>
                <S.ContentsTitle>소개</S.ContentsTitle>
                <S.Contents>{props.data?.fetchCafe.intro_content}</S.Contents>
              </S.InfoContentsBox>
              <div>
                <S.ContentsTitle>위치</S.ContentsTitle>
                <S.Map src="/img/cafe/cafemap.png" />
                {/* <S.LocationBox> */}
                <S.LocationDetail>
                  {props.data?.fetchCafe.address_detail}
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
