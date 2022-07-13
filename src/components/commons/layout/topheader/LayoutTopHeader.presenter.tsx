import Link from "next/link";
import * as S from "./LayoutTopHeader.styles";

export default function LayoutTopHeaderUI(props: any) {
  return (
    <S.Container>
      <S.LoginJoinMenuWrapper>
        <S.LoginJoinWrapper>
          <Link href={"/login"}>
            <S.Contents>로그인</S.Contents>
          </Link>
          <S.Contents>|</S.Contents>
          <Link href={"/signup"}>
            <S.Contents>회원가입</S.Contents>
          </Link>
          <S.Contents>|</S.Contents>
          <S.Contents>로그아웃</S.Contents>
        </S.LoginJoinWrapper>
      </S.LoginJoinMenuWrapper>
    </S.Container>
  );
}
