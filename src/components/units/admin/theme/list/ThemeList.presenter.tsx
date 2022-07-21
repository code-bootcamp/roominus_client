import * as S from "./ThemeList.styles";
import ThemeListUIItem from "./ThemeList.presenterItem";
import { IFetchThemesData, IThemeListUIProps } from "./ThemeList.types";

export default function ThemeListUI(props: IThemeListUIProps) {
  return (
    <S.Wrapper>
      <S.Title>테마 리스트</S.Title>
      <S.ThemeLists>
        {props.data?.fetchThemesAll.map((el: IFetchThemesData) => (
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
