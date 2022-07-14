import * as S from "./ThemeList.styles";
import ThemeListUIItem from "./ThemeList.presenterItem";

export default function ThemeListUI(props) {
  return (
    <S.Wrapper>
      <S.Title>테마 리스트</S.Title>
      <S.ThemeLists>
        {props.data?.fetchThemes.map((el) => (
          <ThemeListUIItem
            key={el.id}
            ThemeData={el}
            onClickMoveToThemeDetail={props.onClickMoveToThemeDetail}
          />
        ))}
      </S.ThemeLists>
    </S.Wrapper>
  );
}
