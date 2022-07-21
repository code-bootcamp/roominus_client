import { useState, useEffect } from "react";
import * as S from "./ThemeList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IFetchGenres, IFetchThemes, IThemeListProps } from "./ThemeList.types";
import MobileCarousel from "./MobileCarousel";
import { v4 as uuidv4 } from "uuid";

export default function ThemeListUI(props: IThemeListProps) {
  const [windowSize, setWindowSize] = useState(false);

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

  return (
    <S.Wrapper>
      {windowSize && (
        <div>
          <S.MobileList>
            <S.MobileGenre>신규 테마</S.MobileGenre>
            <MobileCarousel
              onClickTheme={props.onClickTheme}
              data={props.data}
            />
          </S.MobileList>
          <S.MobileList>
            <S.MobileGenre>인기 테마</S.MobileGenre>
            <MobileCarousel
              onClickTheme={props.onClickTheme}
              data={props.hotThemes}
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
            <S.SearchInput placeholder="테마명을 입력하세요." />
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
            {props.data?.fetchThemes.map((el: IFetchThemes) => (
              <div
                key={uuidv4()}
                onClick={props.onClickTheme(el)}
                style={{ cursor: "pointer" }}
              >
                <S.Flip>
                  <S.Card>
                    <S.Theme src={el.mainImg}>
                      <S.Rank>
                        난이도
                        <S.Star disabled defaultValue={el.rank} />
                      </S.Rank>
                      <S.GenreTag>#{el?.genre.name}</S.GenreTag>
                    </S.Theme>
                    <S.ThemeBack src="/img/theme/card-back.png">
                      <S.ThemeTitle>{el.title}</S.ThemeTitle>
                      <S.ThemeInfo>
                        이용인원 ~ {el.peoplelimit}명
                        <br />
                        나이제한 {el.agelimit}세
                        <br />
                        {el.intro_title}
                      </S.ThemeInfo>
                    </S.ThemeBack>
                  </S.Card>
                </S.Flip>
              </div>
            ))}
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
