import * as S from "./CafeDetail.styles";
import ListTheme from "./card/ListTheme";
import MenuTabs from "./tabs/Tabs";
import { v4 as uuidv4 } from "uuid";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import { ICafeDetailUI, IFetchThemesOnTheme } from "./CafeDetail.types";
import NoTheme from "./notheme/notheme";
import KakaoMap from "./map/Map";
import PublicIcon from "@mui/icons-material/Public";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CafeDetailUI(props: ICafeDetailUI) {
  return (
    <S.Container>
      <S.SearchWrapper>
        <S.InfoSummaryBox>
          <S.CafePicture src={props.data?.fetchCafe.mainImg} />
          <S.InfoTitleBox>
            <S.NamePhoneBox>
              <S.CafeName>{props.data?.fetchCafe.name}</S.CafeName>
              <S.Location>
                <PublicIcon />
                <p>{props.data?.fetchCafe.address}</p>
              </S.Location>
              <S.CafePhone>
                <PhoneIcon />
                <p>{props.data?.fetchCafe.phone}</p>
              </S.CafePhone>
            </S.NamePhoneBox>
          </S.InfoTitleBox>
        </S.InfoSummaryBox>
        <S.InfoBox>
          <S.MenuBox>
            <MenuTabs onChangeKey={props.onChangeKey} />
          </S.MenuBox>
          {props.tabKey === "1" && (
            <S.InfoLocationBox>
              <S.InfoContentsBox>
                <S.ContentsTitle>소개</S.ContentsTitle>
                <S.Contents>{props.data?.fetchCafe.intro_content}</S.Contents>
              </S.InfoContentsBox>
              <S.LocationFlex>
                <S.ContentsTitle>위치</S.ContentsTitle>
                <S.LocationDetail>
                  | {props.data?.fetchCafe.address_detail}
                </S.LocationDetail>
              </S.LocationFlex>
              <KakaoMap data={props.data} />
            </S.InfoLocationBox>
          )}
          {props.tabKey === "2" && (
            <S.Theme>
              {props.themeData?.fetchThemesOnTheme ? (
                <S.ContentsTitle>테마</S.ContentsTitle>
              ) : (
                ""
              )}
              {props.themeData?.fetchThemesOnTheme ? (
                <S.ThemeList>
                  {props.themeData?.fetchThemesOnTheme.map(
                    (el: IFetchThemesOnTheme) => (
                      <span
                        key={uuidv4()}
                        id={el.id}
                        onClick={props.onClickTheme(el)}
                      >
                        <ListTheme el={el} />
                      </span>
                    )
                  )}
                </S.ThemeList>
              ) : (
                <NoTheme />
              )}
            </S.Theme>
          )}
        </S.InfoBox>
      </S.SearchWrapper>
      <S.ButtonBox>
        <WebBlackButton
          title="목록으로"
          onClick={props.onClickList}
          type={"button"}
          value={undefined}
        />
      </S.ButtonBox>
    </S.Container>
  );
}
