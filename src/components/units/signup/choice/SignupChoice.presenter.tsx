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
          <S.KakaoBtn onClick={props.onClickLoginKakao}>
            <S.KakaoSymbol src="/img/login/kakaoSymbol.png" alt="kakaoSymbol" />
            <S.KakaoLabel>카카오 로그인</S.KakaoLabel>
          </S.KakaoBtn>
          <S.GoogleBtn onClick={props.onClickGoogleLogin}>
            <S.GoogleSymbol
              src="/img/login/googleSymbol.png"
              alt="googleSymbol"
            />
            <S.GoogleLabel>구글 로그인</S.GoogleLabel>
          </S.GoogleBtn>
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
