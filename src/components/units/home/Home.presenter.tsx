import * as S from "./Home.styles";
import Link from "next/link";

export default function HomeUI() {
  return (
    <S.Wrapper>
      <S.BackGroundImg></S.BackGroundImg>
      <S.StoreBox>
        <S.StoreTitleBox>
          <Link href={"/cafe"}>
            <span>더보기</span>
          </Link>
        </S.StoreTitleBox>
        <S.StoreImgbox>
          <div>
            <S.StoreImgs src="/img/cafe/cafe.jpeg" alt="bestStore1" />
            <div>SOLVER - 홍대점</div>
            <span>
              <S.Location />
              홍대
            </span>
          </div>
          <div>
            <S.StoreImgs src="/img/cafe/cafe.jpeg" alt="bestStore1" />
            <div>SOLVER - 홍대점</div>
            <span>
              <S.Location />
              강남
            </span>
          </div>
          <div>
            <S.StoreImgs src="/img/cafe/cafe.jpeg" alt="bestStore1" />
            <div>SOLVER - 홍대점</div>
            <span>
              <S.Location />
              건대
            </span>
          </div>
        </S.StoreImgbox>
      </S.StoreBox>
      <div>
        <div>
          <span>지금 가장 HOT한 테마는?</span>
          <Link href={"/theme"}>
            <span>더보기</span>
          </Link>
        </div>
        <div>
          <img src="/img/theme/월야애담.webp" alt="bestTheme1" />
          <img src="/img/theme/월야애담.webp" alt="bestTheme2" />
          <img src="/img/theme/월야애담.webp" alt="bestTheme3" />
        </div>
      </div>
    </S.Wrapper>
  );
}
