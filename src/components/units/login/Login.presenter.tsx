import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import * as S from "./Login.styles";
export default function LoginUI(props) {
  return (
    <S.Wrapper>
      <S.Title>로그인</S.Title>
      <S.Form onSubmit={props.handleSubmit(props.onSubmitLogin)}>
        <S.IDdBox>
          <S.Input
            type="text"
            name="email"
            placeholder="아이디를 입력해주세요"
            onChange={(e) => props.setValue("email", e.target.value)}
          />
        </S.IDdBox>
        <S.Error>{props.formState.errors.email?.message}</S.Error>
        <S.PasswordBox>
          <S.Input
            onChange={(e) => props.setValue("password", e.target.value)}
            name="password"
            ref={props.passwordInputRef}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          {props.openEye && (
            <FontAwesomeIcon
              onClick={props.onClickShowPassword}
              icon={faEye}
              style={{ color: "purple", fontSize: "1.5em", cursor: "pointer" }}
            />
          )}
          {!props.openEye && (
            <FontAwesomeIcon
              onClick={props.onClickShowPassword}
              icon={faEyeSlash}
              style={{ color: "purple", fontSize: "1.5em", cursor: "pointer" }}
            />
          )}
        </S.PasswordBox>
        <S.Error>{props.formState.errors.password?.message}</S.Error>
        <S.LoginBtn>로그인하기</S.LoginBtn>
      </S.Form>
      <S.SignUpBox>
        <S.SignupLabel>아직 계정이 없으신가요?</S.SignupLabel>
        <S.SignUpbtn onClick={props.onClickMoveToSignUp}>회원가입</S.SignUpbtn>
      </S.SignUpBox>
      <S.Divider></S.Divider>
      <S.SocialLoginBtns>
        <S.SocialLoginBtn>
          <S.SocialLoginLogo
            src="/img/login/naverlogo.png"
            alt="naverSocialLogo"
          />
        </S.SocialLoginBtn>
        <S.SocialLoginBtn onClick={props.onClickLoginKakao}>
          <S.SocialLoginLogo
            src="/img/login/kakaoLogo.png"
            alt="kakakoSocialLogo"
          />
        </S.SocialLoginBtn>
        <S.SocialLoginBtn>
          <S.SocialLoginLogo
            src="/img/login/googlelogo.png"
            alt="googleLogo"
            onClick={props.onClickGoogleLogin}
          />
        </S.SocialLoginBtn>
      </S.SocialLoginBtns>
    </S.Wrapper>
  );
}
