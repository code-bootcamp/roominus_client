import {
  faPersonRunning,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./SignupChoice.styles";
import { ISignupChoiceUIProps } from "./SignupChoice.types";

export default function SignupChoiceUI(props: ISignupChoiceUIProps) {
  return (
    <S.Wrapper>
      <S.PersonalSignupBox>
        <FontAwesomeIcon
          icon={faPersonRunning}
          style={{
            fontSize: "4em",
            marginBottom: "0.5em",
            color: "#6c1bb2",
          }}
        />
        <S.PersonalSignupBtn onClick={props.onClickMoveToSignUp}>
          일반 회원가입
        </S.PersonalSignupBtn>
        <S.SocialSignupBtnsBox>
          <S.KakaoBtn onClick={props.onClickLoginKakao}>
            <S.KakaoSymbol
              src="/img/login/kakaoSymbol.webp"
              alt="kakaoSymbol"
            />
            <S.KakaoLabel>카카오 회원가입</S.KakaoLabel>
          </S.KakaoBtn>
          <S.GoogleBtn onClick={props.onClickGoogleLogin}>
            <S.GoogleSymbol
              src="/img/login/googleSymbol.webp"
              alt="googleSymbol"
            />
            <S.GoogleLabel>구글 회원가입</S.GoogleLabel>
          </S.GoogleBtn>
        </S.SocialSignupBtnsBox>
      </S.PersonalSignupBox>
      <S.StoreOwnerSignupBox>
        <FontAwesomeIcon
          icon={faPeopleGroup}
          style={{ fontSize: "4em", marginBottom: "0.5em" }}
        />
        <S.StoreOwnerSignupBtn onClick={props.onClickMoveToOwner}>
          점주 회원가입
        </S.StoreOwnerSignupBtn>
      </S.StoreOwnerSignupBox>
    </S.Wrapper>
  );
}
