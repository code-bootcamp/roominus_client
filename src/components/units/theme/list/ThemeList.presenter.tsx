import { useState, Fragment } from "react";
import * as S from "./ThemeList.styles";
import { v4 } from "uuid";
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
  return (
    <S.Wrapper>
      <S.GenreList>
        <S.Genre isPicked={true}>전체</S.Genre>
        <S.Genre isPicked={false}>추리</S.Genre>
        <S.Genre isPicked={false}>스릴러</S.Genre>
        <S.Genre isPicked={false}>공포</S.Genre>
        <S.Genre isPicked={false}>로맨스</S.Genre>
        <S.Genre isPicked={false}>범죄</S.Genre>
        <S.Genre isPicked={false}>코미디</S.Genre>
        <S.Genre isPicked={false}>모험</S.Genre>
        <S.Genre isPicked={false}>감성</S.Genre>
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
        <S.Theme src="/img/theme/월야애담.jpeg">
          <S.GenreTag>#감성</S.GenreTag>
          <S.Rank>
            난이도
            <img width={20} src="/img/theme/rankstar.png" />
            <img width={20} src="/img/theme/rankstar.png" />
            <img width={20} src="/img/theme/rankstar.png" />
            <img width={20} src="/img/theme/rankstar.png" />
            <img width={20} src="/img/theme/rankstar.png" />
          </S.Rank>
          {/* rank수만큼 별이 나오게 하기 */}
        </S.Theme>
        <S.Theme src="/img/theme/월야애담.jpeg">
          <S.GenreTag>#로맨스</S.GenreTag>
          <S.Rank>
            난이도
            <img width={20} src="/img/theme/rankstar.png" />
            <img width={20} src="/img/theme/rankstar.png" />
            <img width={20} src="/img/theme/rankstar.png" />
            <img width={20} src="/img/theme/rankstar.png" />
            <img width={20} src="/img/theme/rankstar.png" />
          </S.Rank>
          {/* rank수만큼 별이 나오게 하기 */}
        </S.Theme>
        <S.Theme src="/img/theme/월야애담.jpeg">
          <S.GenreTag>#미스테리</S.GenreTag>
          <S.Rank>
            난이도
            <img width={20} src="/img/theme/rankstar.png" />
          </S.Rank>
          {/* rank수만큼 별이 나오게 하기 */}
        </S.Theme>
        <S.Theme src="/img/theme/월야애담.jpeg">
          <S.GenreTag>#스릴러</S.GenreTag>
          <S.Rank>
            난이도
            <img width={20} src="/img/theme/rankstar.png" />
          </S.Rank>
          {/* rank수만큼 별이 나오게 하기 */}
        </S.Theme>
      </S.ThemeList>
      <S.ButtonBox>
        <S.ShowMoreButton>더보기</S.ShowMoreButton>
      </S.ButtonBox>
    </S.Wrapper>
  );
}
