import { useRouter } from "next/router";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./FindIdDetail.style";
import { IFindIdDetailUIProps } from "./FindIdDetail.types";

export default function FindIdDetailUI(props: IFindIdDetailUIProps) {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.IDinfoBox>
        <S.IDTitle>조회하신 아이디는</S.IDTitle>
        <S.SearchingID>{router.query.email}</S.SearchingID>
        <S.IDdetailInfo>가입되지 않은 정보입니다.</S.IDdetailInfo>
        <S.LoginBox>
          <WebBlackButton
            type="button"
            title="다시찾기"
            onClick={props.onClickMoveToFind}
          />
          <WebPurpleButton
            type="button"
            title="로그인"
            onClick={props.onClickMoveToLogin}
          />
        </S.LoginBox>
      </S.IDinfoBox>
    </S.Wrapper>
  );
}
