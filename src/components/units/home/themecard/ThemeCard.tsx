import * as S from "../../theme/list/ThemeList.styles";

// const Wrapper = styled.div`
//   :hover {
//     transform: translateY(-0.3em);
//   }
//   transition: all 250ms ease-in-out;
//   border: 1px solid #c2c2c2;
// `;

export default function ThemeCardComponent(props: any) {
  return (
    <div>
      <S.Flip>
        <S.Card>
          <S.Theme src={props.el?.mainImg}>
            <S.ImgGradient />
            <S.Rank>
              난이도
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
