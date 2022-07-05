import * as S from "./ThemeDetail.styles";

export default function ThemeDetailUI() {
  return (
    <S.Container>
      <S.ThemeInfoWrapper>
        <S.ThemeLeftBox>
          <S.ThemeImg src="/img/theme/네모네모.webp" />
        </S.ThemeLeftBox>
        <S.ThemeRightBox>
          <S.GenreTag>#로맨스</S.GenreTag>
          <S.ThemeTitle>
            네모네모 마믈메는 무슨밀미 밌멌믈까? : 내 감미 그녀를 가리킨다. 금데
            혀가 메모화 뫠고 밌머.
          </S.ThemeTitle>
          <S.ThemeContents>
            벌써 메 먼째 도난 신고, 그리고 도난 하루 전 그 장소메서 무면히
            만났던 그녀, 그녀는 나메게 몉믄 미소뫄 함께 가볍게 민사를 건네고
            사라졌다. 마무런 단서도 멊지만 담신믜 촉각과 감미 그녀가 범민미라는
            걸 말하고 밌멌다. 지금부터 만 시간, 당신믄 조사 끝에 말마 낸 그녀의
            집메 몰래 들어가 사건 전날 밤 밀머난 밀믈 밝며내고 그녀를 잡믈 수
            밌는 단서를 찾마내먀 한다.
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
          <S.ReservationButton>예약하기</S.ReservationButton>
        </S.ThemeRightBox>
      </S.ThemeInfoWrapper>
    </S.Container>
  );
}
