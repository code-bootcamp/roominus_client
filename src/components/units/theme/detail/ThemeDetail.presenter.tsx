import * as S from "./ThemeDetail.styles";

export default function ThemeDetailUI(props) {
  return (
    <S.Container>
      <S.ThemeInfoWrapper>
        <S.ThemeLeftBox>
          <S.ThemeImg src={props.data?.fetchTheme?.mainImg} />
        </S.ThemeLeftBox>
        <S.ThemeRightBox>
          <S.GenreTag>#로맨스</S.GenreTag>
          <S.ThemeTitle>{props.data?.fetchTheme.title}</S.ThemeTitle>
          <S.ThemeContents>
            {props.data?.fetchTheme.intro_content}
          </S.ThemeContents>
          <S.RankTimeBox>
            <S.ThemeRank>
              난이도 <img src="/img/theme/rankstar.webp" />
              <img src="/img/theme/rankstar.webp" />
              <img src="/img/theme/rankstar.webp" />
              <img src="/img/theme/rankstar.webp" />
              <img src="/img/theme/rankstar.webp" />
            </S.ThemeRank>
            <S.ThemeTime>이용시간 110분</S.ThemeTime>
          </S.RankTimeBox>
          <S.ChargeBox>
            이용요금
            <S.ThemeCharge>
              2인 : 44,000원 / 3인 : 60,000원 / 4인 : 72,000원 / 5인 : 85,000원
            </S.ThemeCharge>
          </S.ChargeBox>
          <S.ButtonWrapper>
            <S.ReservationButton>예약하기</S.ReservationButton>
          </S.ButtonWrapper>
        </S.ThemeRightBox>
      </S.ThemeInfoWrapper>
    </S.Container>
  );
}
