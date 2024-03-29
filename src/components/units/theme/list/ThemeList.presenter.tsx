import { useState, useEffect, ChangeEvent } from "react";
import * as S from "./ThemeList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IFetchGenres, IFetchThemes, IThemeListProps } from "./ThemeList.types";
import MobileCarousel from "./MobileCarousel";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

export default function ThemeListUI(props: IThemeListProps) {
  const [windowSize, setWindowSize] = useState(false);
  const [searchedData, setSearchedData] = useState(props.data?.fetchThemes);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  const hotThemes = props.themesAll?.fetchThemesAll
    .slice()
    .sort((a: IFetchThemes, b: IFetchThemes) => {
      return b.like - a.like;
    })
    .slice(0, 8);

  const getDebounce = _.debounce((data) => {
    const filtered = props.data?.fetchThemes.filter(
      (themeList: IFetchThemes) => {
        return themeList.title.includes(data);
      }
    );

    setSearchedData(filtered);
  }, 200);

  const onChangeSearchInput = (event: ChangeEvent) => {
    getDebounce((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    !windowSize && setSearchedData(props.data?.fetchThemes);
    if (!windowSize) props.searchInputRef.current.value = "";
  }, [props.data?.fetchThemes]);

  return (
    <S.Wrapper>
      {windowSize && (
        <div>
          <S.MobileList>
            <S.MobileGenre>신규 테마</S.MobileGenre>
            <MobileCarousel
              onClickTheme={props.onClickTheme}
              data={props.data?.fetchThemes}
            />
          </S.MobileList>
          <S.MobileList>
            <S.MobileGenre>인기 테마</S.MobileGenre>
            <MobileCarousel
              onClickTheme={props.onClickTheme}
              data={hotThemes}
            />
          </S.MobileList>
        </div>
      )}

      {!windowSize && (
        <div>
          <S.SearchBox>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ fontSize: "30px", color: "#DAD6E1" }}
            />
            <S.SearchInput
              placeholder="테마명을 입력하세요."
              onChange={onChangeSearchInput}
              ref={props.searchInputRef}
            />
          </S.SearchBox>
          <S.GenreList>
            <S.Genre onClick={props.onClickAllGenre} isPicked={props.selectAll}>
              전체
            </S.Genre>
            {props.fetchGenres?.fetchGenres.map(
              (el: IFetchGenres, i: number) => (
                <S.Genre
                  onClick={props.onClickGenre(el.id, i)}
                  isPicked={props.myIndex[i]}
                  key={el.id}
                >
                  {el.name}
                </S.Genre>
              )
            )}
          </S.GenreList>
          <S.ThemeList>
            {(searchedData || props.data?.fetchThemes)?.map(
              (el: IFetchThemes) => (
                <div
                  key={uuidv4()}
                  onClick={props.onClickTheme(el)}
                  style={{ cursor: "pointer" }}
                >
                  <S.Flip>
                    <S.Card>
                      <S.Theme src={el.mainImg}>
                        <S.Rank>
                          <S.Ranktext>난이도</S.Ranktext>
                          <S.Star
                            disabled
                            value={el.rank}
                            style={{ color: "#7556ee" }}
                          />
                        </S.Rank>
                        <S.GenreTag>#{el?.genre.name}</S.GenreTag>
                      </S.Theme>
                      <S.ThemeBack src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990939/public/theme/card-back_ef6jjd.png">
                        <S.ThemeTitle>{el.title}</S.ThemeTitle>
                        <S.ThemeInfo>
                          이용인원 2 ~ {el.peoplelimit}명
                          <br />
                          나이제한 {el.agelimit}세
                          <br />
                          <S.ThemeIntroTitle>
                            `{el.intro_title}`
                          </S.ThemeIntroTitle>
                        </S.ThemeInfo>
                      </S.ThemeBack>
                    </S.Card>
                  </S.Flip>
                </div>
              )
            )}
          </S.ThemeList>
          {props.more ? (
            <S.ButtonBox>
              <S.ShowMoreButton onClick={props.onClickMoreButton}>
                더보기
              </S.ShowMoreButton>
            </S.ButtonBox>
          ) : (
            ""
          )}
        </div>
      )}
    </S.Wrapper>
  );
}
