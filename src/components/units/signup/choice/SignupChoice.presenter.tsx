import * as S from "./SignupChoice.styles";
import { ISignupChoiceUIProps } from "./SignupChoice.types";

export default function SignupChoiceUI(props: ISignupChoiceUIProps) {
  return (
    <S.Wrapper>
      <S.SignUpTitle>
        방탈출 통합 예약 서비스
        <img src="/img/signup/textlogo.png" style={{ width: "10em" }} />
      </S.SignUpTitle>
      <S.SignupChoiceBox>
        <S.PersonalSignupBox>
          {/* <FontAwesomeIcon
            icon={faPersonRunning}
            style={{
              fontSize: "4em",
              marginBottom: "0.5em",
              color: "#6c1bb2",
            }}
          /> */}
          <img src="/img/signup/escape.png" style={{ height: "80px" }} />
          <S.PersonalSignupBtn onClick={props.onClickMoveToSignUp}>
            개인 회원가입
          </S.PersonalSignupBtn>
          <S.SocialSignupBtnsBox>
            {/* <S.KakaoBtn onClick={props.onClickLoginKakao}> */}
            <S.KakaoSymbol
              src="/img/login/kakaoSymbol.webp"
              alt="kakaoSymbol"
              onClick={props.onClickLoginKakao}
            />
            {/* <S.KakaoLabel>카카오로 회원가입</S.KakaoLabel> */}
            {/* </S.KakaoBtn> */}
            {/* <S.GoogleBtn onClick={props.onClickGoogleLogin}> */}
            <S.GoogleSymbol
              src="/img/login/googleSymbol.webp"
              alt="googleSymbol"
              onClick={props.onClickGoogleLogin}
            />
            {/* <S.GoogleLabel>구글로 회원가입</S.GoogleLabel> */}
            {/* </S.GoogleBtn> */}
          </S.SocialSignupBtnsBox>
        </S.PersonalSignupBox>
        <S.StoreOwnerSignupBox>
          <img src="/img/signup/key.png" style={{ height: "80px" }} />
          {/* <FontAwesomeIcon
            icon={faPeopleGroup}
            style={{ fontSize: "4em", marginBottom: "0.5em" }}
          /> */}
          <S.StoreOwnerSignupBtn onClick={props.onClickMoveToOwner}>
            방탈출 카페 점주 회원가입
          </S.StoreOwnerSignupBtn>
        </S.StoreOwnerSignupBox>
      </S.SignupChoiceBox>
    </S.Wrapper>
  );
}
