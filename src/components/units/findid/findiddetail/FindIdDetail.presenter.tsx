import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./FindIdDetail.style";

export default function FindIdDetailUI(props) {
  return (
    <S.Wrapper>
      <S.IDinfoBox>
        <S.IDTitle>조회하신 아이디는</S.IDTitle>
        <S.SearchingID>BUBUBU123 입니다.</S.SearchingID>
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
