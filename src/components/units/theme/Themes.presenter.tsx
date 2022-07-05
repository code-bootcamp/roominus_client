import { useState } from "react";
import * as S from "./Themes.styles";

export default function ThemeUI() {
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
      <S.ThemeList>
        <S.Theme src="/img/월야애담.jpeg">
          <S.GenreTag>#감성</S.GenreTag>
          <S.Rank>
            난이도
            <img width={20} src="/img/rankstar.png" />
            <img width={20} src="/img/rankstar.png" />
            <img width={20} src="/img/rankstar.png" />
            <img width={20} src="/img/rankstar.png" />
            <img width={20} src="/img/rankstar.png" />
          </S.Rank>
          {/* rank수만큼 별이 나오게 하기 */}
        </S.Theme>
        <S.Theme src="/img/월야애담.jpeg">
          <S.GenreTag>#로맨스</S.GenreTag>
          <S.Rank>
            난이도
            <img width={20} src="/img/rankstar.png" />
            <img width={20} src="/img/rankstar.png" />
            <img width={20} src="/img/rankstar.png" />
            <img width={20} src="/img/rankstar.png" />
            <img width={20} src="/img/rankstar.png" />
          </S.Rank>
          {/* rank수만큼 별이 나오게 하기 */}
        </S.Theme>
        <S.Theme src="/img/월야애담.jpeg">
          <S.GenreTag>#미스테리</S.GenreTag>
          <S.Rank>
            난이도
            <img width={20} src="/img/rankstar.png" />
          </S.Rank>
          {/* rank수만큼 별이 나오게 하기 */}
        </S.Theme>
        <S.Theme src="/img/월야애담.jpeg">
          <S.GenreTag>#스릴러</S.GenreTag>
          <S.Rank>
            난이도
            <img width={20} src="/img/rankstar.png" />
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
