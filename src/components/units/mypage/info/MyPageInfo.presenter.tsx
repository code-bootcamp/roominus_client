import Link from "next/link";
import * as S from "./MyPageInfo.styles";

export default function MyPageInfoUI(props: any) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>마이페이지</S.Title>
        <S.Label>이름 : 홍길동</S.Label>
        <S.Label>이메일 : abcd1234@gmail.com</S.Label>
        <S.PhoneBox>
          <S.Label>휴대폰 번호 : 010 - 1234 - 5678</S.Label>
          <S.resetButton>변경하기</S.resetButton>
        </S.PhoneBox>

        <div>
          <S.Label>최근 본 테마</S.Label>
        </div>

        <div>
          <S.Label>결제 내역</S.Label>
          <S.addButton>
            <Link href={"/mypage/history"}>
              <S.Contents>더보기</S.Contents>
            </Link>
          </S.addButton>
        </div>

        <div>
          <S.Label>적립 내역</S.Label>
          <S.addButton>
            <Link href={"/mypage/reward"}>
              <S.Contents>더보기</S.Contents>
            </Link>
          </S.addButton>
        </div>

        <div>
          <S.Label>찜 내역</S.Label>
          <S.addButton>
            <Link href={"/mypage/mypick"}>
              <S.Contents>더보기</S.Contents>
            </Link>
          </S.addButton>
        </div>
      </S.Wrapper>
    </S.Container>
  );
}
