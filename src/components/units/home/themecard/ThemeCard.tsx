import { useRouter } from "next/router";
import * as S from "../../theme/list/ThemeList.styles";

export default function ThemeCardComponent(props: any) {
  const router = useRouter();
  const onClickTheme = (el: { id: string }) => () => {
    router.push(`/theme/${el.id}`);
  };

  return (
    <div onClick={onClickTheme(props.el)}>
      <S.Flip>
        <S.Card>
          <S.Theme src={props.el?.mainImg}>
            <S.Rank>
              <S.Ranktext>난이도</S.Ranktext>
              <S.Star
                disabled
                value={props.el?.rank}
                style={{ color: "#7556ee" }}
              />
            </S.Rank>
            <S.GenreTag>#{props.el?.genre.name}</S.GenreTag>
          </S.Theme>
          <S.ThemeBack src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990939/public/theme/card-back_ef6jjd.png">
            <S.ThemeTitle>{props.el?.title}</S.ThemeTitle>
            <S.ThemeInfo>
              이용인원 2명 ~ {props.el?.peoplelimit}명
              <br />
              나이제한 {props.el?.agelimit}세
              <br />
              <S.ThemeIntroTitle>`{props.el?.intro_title}`</S.ThemeIntroTitle>
            </S.ThemeInfo>
          </S.ThemeBack>
        </S.Card>
      </S.Flip>
    </div>
  );
}
