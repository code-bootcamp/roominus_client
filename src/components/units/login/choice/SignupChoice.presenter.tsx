import {
  faPersonRunning,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./SignupChoice.styles";

export default function SignupChoiceUI(props) {
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
          탈출러들-회원가입
        </S.PersonalSignupBtn>
        <S.SocialSignupBtnsBox>
          <S.SocialSignupBtns
            src="/img/login/kakaoLogo.png"
            alt="kakakoSocialLogo"
            onClick={props.onClickLoginKakao}
          />
          <S.SocialSignupBtns
            src="/img/login/googlelogo.png"
            alt="googleLogo"
            onClick={props.onClickGoogleLogin}
          />
        </S.SocialSignupBtnsBox>
      </S.PersonalSignupBox>
      <S.StoreOwnerSignupBox>
        <FontAwesomeIcon
          icon={faPeopleGroup}
          style={{ fontSize: "4em", marginBottom: "0.5em" }}
        />
        <S.StoreOwnerSignupBtn onClick={props.onClickMoveToSignUp}>
          점주님들-회원가입
        </S.StoreOwnerSignupBtn>
      </S.StoreOwnerSignupBox>
    </S.Wrapper>
  );
}
