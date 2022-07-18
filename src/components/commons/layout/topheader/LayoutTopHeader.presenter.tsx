import Link from "next/link";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import * as S from "./LayoutTopHeader.styles";

export default function LayoutTopHeaderUI(props: any) {
  const [accessToken] = useRecoilState(accessTokenState);
  return (
    <S.Container>
      <S.LoginJoinMenuWrapper>
        <S.LoginJoinWrapper>
          {!accessToken && (
            <>
              <Link href={"/login"}>
                <S.Contents>로그인</S.Contents>
              </Link>
              <S.Contents>|</S.Contents>
              <Link href={"/signup/choice"}>
                <S.Contents>회원가입</S.Contents>
              </Link>
            </>
          )}
          {accessToken && <S.Contents>로그아웃</S.Contents>}
        </S.LoginJoinWrapper>
      </S.LoginJoinMenuWrapper>
    </S.Container>
  );
}
