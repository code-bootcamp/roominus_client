import { useState, Fragment } from "react";
import * as S from "./ThemeList.styles";
import { v4 } from "uuid";
import { useRouter } from "next/router";

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
export default function ThemeListUI(props) {
  const [isPicked, setIsPicked] = useState(false);
  const router = useRouter();
  let themes = [
    "/img/theme/ex/1.png",
    "/img/theme/ex/2.png",
    "/img/theme/ex/3.jpeg",
    "/img/theme/ex/4.jpeg",
    "/img/theme/ex/5.png",
    "/img/theme/ex/6.jpeg",
    "/img/theme/ex/7.jpeg",
    "/img/theme/ex/8.jpeg",
    "/img/theme/ex/9.png",
    "/img/theme/ex/10.jpeg",
    "/img/theme/ex/11.png",
    "/img/theme/ex/12.png",
    "/img/theme/ex/13.jpeg",
    "/img/theme/ex/14.jpeg",
    "/img/theme/ex/15.jpeg",
  ];

  const onClickTheme = () => {
    router.push(`/theme/월야애담`);
  };
  return (
    <S.Wrapper>
      <S.SearchBox>
        <S.SearchInputWrapper>
          <S.SearchInput placeholder="키워드를 입력하세요." />
          <S.SearchInputUnderline />
        </S.SearchInputWrapper>
        <S.SearchButton>검색</S.SearchButton>
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
      {props.isToggled ? (
        <S.Close onClick={props.onClickToggled} />
      ) : (
        <S.Menu onClick={props.onClickToggled} />
      )}
      {true ? (
        <S.Toggle>
          <S.ToggleMenuWrapper>
            {NAVIGATION_MENUS.map((el) => (
              <Fragment key={v4()}>
                <S.ToggleMenu>
                  <a>{el.name}</a>
                </S.ToggleMenu>
              </Fragment>
            ))}
            <S.ToggleMenu>마이페이지</S.ToggleMenu>
          </S.ToggleMenuWrapper>
        </S.Toggle>
      ) : (
        <></>
      )}
      <div></div>
      <S.ThemeList>
        {themes.map((el, i) => (
          <div key={i} onClick={onClickTheme}>
            <S.Flip>
              <S.Card>
                <S.Theme src={el}>
                  <S.ImgGradient />
                  <S.Rank>
                    난이도
                    <img width={20} src="/img/theme/rankstar.png" />
                    <img width={20} src="/img/theme/rankstar.png" />
                    <img width={20} src="/img/theme/rankstar.png" />
                    <img width={20} src="/img/theme/rankstar.png" />
                    <img width={20} src="/img/theme/rankstar.png" />
                  </S.Rank>
                  <S.GenreTag>#미스테리</S.GenreTag>
                </S.Theme>
                <S.ThemeBack src="/img/theme/card-back.png">
                  <S.ThemeTitle>
                    그래도 피망은
                    <br /> 먹기 싫단 말이에욧
                  </S.ThemeTitle>
                  <S.ThemeInfo>
                    정원 1~2인
                    <br />
                    시간 65분
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
    </S.Wrapper>
  );
}
