import { useState, useEffect } from "react";
import * as S from "./ThemeList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IFetchThemes, IThemeListProps } from "./ThemeList.types";
import MobileCarousel from "./MobileCarousel";

const NAVIGATION_MENUS = [
  { name: "전체" },
  { name: "추리" },
  { name: "스릴러" },
  { name: "공포" },
  { name: "로맨스" },
  { name: "범죄" },
  { name: "코미디" },
  { name: "모험" },
  { name: "감성" },
  { name: "기타" },
];
export default function ThemeListUI(props: IThemeListProps) {
  // const onClickTheme = () => {
  //   router.push(`/theme/${el.id}`);
  // };

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
      <S.SearchBox>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: "30px", color: "#DAD6E1" }}
        />
        <S.SearchInput placeholder="테마명을 입력하세요." />
      </S.SearchBox>
      <S.GenreList>
        <S.Genre isPicked={true}>전체</S.Genre>
        <S.Genre isPicked={false}>추리</S.Genre>
        <S.Genre isPicked={false}>스릴러</S.Genre>
        <S.Genre isPicked={false}>공포</S.Genre>
        <S.Genre isPicked={false}>로맨스</S.Genre>
        <S.Genre isPicked={false}>범죄</S.Genre>
        <S.Genre isPicked={false}>코미디</S.Genre>
        <S.Genre isPicked={false}>모험</S.Genre>
        <S.Genre isPicked={false}>일상</S.Genre>
        <S.Genre isPicked={false}>감성</S.Genre>
        <S.Genre isPicked={false}>동물</S.Genre>
        <S.Genre isPicked={false}>기타</S.Genre>
      </S.GenreList>
      {windowSize && (
        <div>
          <MobileCarousel data={props.data} />
          <MobileCarousel data={props.data} />
        </div>
      )}

      {!windowSize && (
        <div>
          <S.ThemeList>
            {props.data?.fetchThemes.map((el: IFetchThemes) => (
              <div key={el.id} onClick={props.onClickTheme(el)}>
                <S.Flip>
                  <S.Card>
                    <S.Theme src={el.mainImg}>
                      <S.ImgGradient />
                      <S.Rank>
                        난이도
                        <S.Star disabled defaultValue={el.rank} />
                      </S.Rank>
                      <S.GenreTag>#{el?.genre.name}</S.GenreTag>
                    </S.Theme>
                    <S.ThemeBack src="/img/theme/card-back.png">
                      <S.ThemeTitle>{el.title}</S.ThemeTitle>
                      <S.ThemeInfo>
                        정원 1~2인
                        <br />
                        나이제한 {el.agelimit}
                        <br />
                        요금 20,000원
                      </S.ThemeInfo>
                    </S.ThemeBack>
                  </S.Card>
                </S.Flip>
              </div>
            ))}
          </S.ThemeList>
          <S.ButtonBox>
            <S.ShowMoreButton>더보기</S.ShowMoreButton>
          </S.ButtonBox>
        </div>
      )}
    </S.Wrapper>
  );
}
