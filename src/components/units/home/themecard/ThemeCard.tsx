import { useRouter } from "next/router";
import * as S from "../../theme/list/ThemeList.styles";

export default function ThemeCardComponent(props: any) {
  const router = useRouter();
  const onClickTheme = (el: { id: string }) => () => {
    console.log(el);
    router.push(`/theme/${el.id}`);
  };

  return (
    <div onClick={onClickTheme(props.el)}>
      <S.Flip>
        <S.Card>
          <S.Theme src={props.el?.mainImg}>
            <S.Rank>
              <S.Ranktext>난이도</S.Ranktext>
              <S.Star disabled defaultValue={props.el?.rank} />
            </S.Rank>
            <S.GenreTag>#{props.el?.genre.name}</S.GenreTag>
          </S.Theme>
          <S.ThemeBack src="/img/theme/card-back.png">
            <S.ThemeTitle>{props.el?.title}</S.ThemeTitle>
            <S.ThemeInfo>
              정원 1~2인
              <br />
              나이제한 {props.el?.agelimit}
              <br />
              요금 20,000원
            </S.ThemeInfo>
          </S.ThemeBack>
        </S.Card>
      </S.Flip>
    </div>
  );
}
