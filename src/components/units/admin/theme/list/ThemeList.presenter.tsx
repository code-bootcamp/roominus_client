import * as S from "./ThemeList.styles";
import ThemeListItem from "./ThemeListItem";

export default function ThemeListUI(props) {
  return (
    <S.Wrapper>
      <S.Title>테마 리스트</S.Title>
      <S.ThemeLists>
        {props.data?.fetchThemes.map((el) => (
          <ThemeListItem
            key={el.id}
            ThemeData={el}
            onClickMoveToThemeDetail={props.onClickMoveToThemeDetail}
          />
        ))}
      </S.ThemeLists>
    </S.Wrapper>
  );
}
