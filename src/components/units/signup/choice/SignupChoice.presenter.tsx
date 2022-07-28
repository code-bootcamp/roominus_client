import * as S from "./SignupChoice.styles";
import { ISignupChoiceUIProps } from "./SignupChoice.types";

export default function SignupChoiceUI(props: ISignupChoiceUIProps) {
  return (
    <S.Wrapper>
      <S.SignUpTitle>
        방탈출 통합 예약 서비스
        <img
          src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990939/public/signup/textlogo_ge1no7.png"
          style={{ width: "10em" }}
        />
      </S.SignUpTitle>
      <S.SignupChoiceBox>
        <S.PersonalSignupBox>
          <img
            src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990939/public/signup/escape_rgppoo.png"
            style={{ height: "80px" }}
          />
          <S.PersonalSignupBtn onClick={props.onClickMoveToSignUp}>
            개인 회원가입
          </S.PersonalSignupBtn>
          <S.SocialSignupBtnsBox>
            {/* <S.KakaoBtn onClick={props.onClickLoginKakao}> */}
            <S.KakaoSymbol
              src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990937/public/login/kakaoSymbol_pcjtce.webp"
              alt="kakaoSymbol"
              onClick={props.onClickLoginKakao}
            />

            <S.GoogleSymbol
              src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990937/public/login/googleSymbol_jzgulr.webp"
              alt="googleSymbol"
              onClick={props.onClickGoogleLogin}
            />
          </S.SocialSignupBtnsBox>
        </S.PersonalSignupBox>
        <S.StoreOwnerSignupBox>
          <img
            src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990939/public/signup/key_fyhmnr.png"
            style={{ height: "80px" }}
          />

          <S.StoreOwnerSignupBtn onClick={props.onClickMoveToOwner}>
            방탈출 카페 점주 회원가입
          </S.StoreOwnerSignupBtn>
        </S.StoreOwnerSignupBox>
      </S.SignupChoiceBox>
    </S.Wrapper>
  );
}
