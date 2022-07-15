import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import * as S from "./Login.styles";
import WebPurpleLoginButton from "../../commons/buttons/buttonDesktop/WebPurpleLoginButton";
import { useEffect } from "react";
import Head from "next/head";

export default function LoginUI(props) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src = "https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js";
    document.head.appendChild(script);

    script.onload = () => {
      const naverIdLogin = new naver_id_login(
        "1wXq1o0g2z9j6TSlaVB0",
        "http://localhost:3000/signup/detail"
      );
      const state = naverIdLogin.getUniqState();
      naverIdLogin.setButton("white", 0, 80);
      naverIdLogin.setDomain("http://localhost:3000/");
      naverIdLogin.setState(state);

      naverIdLogin.init_naver_id_login();
    };
  }, []);

  return (
    <S.Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
        ></script>
        <script
          type="text/javascript"
          src="http://code.jquery.com/jquery-1.11.3.min.js"
        ></script>
      </Head>
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
        <WebPurpleLoginButton type="submit" title="로그인하기" />
      </S.Form>
      <S.SignUpBox>
        <S.SignUpdetailBox>
          <S.SignupLabel>아직 계정이 없으신가요?</S.SignupLabel>
          <S.SignUpbtn onClick={props.onClickMoveToSignUp}>
            회원가입
          </S.SignUpbtn>
        </S.SignUpdetailBox>
        <S.FindIdPasswordBtn onClick={props.onClickMoveToFindIdPassword}>
          아이디 찾기 / 비밀번호 재설정
        </S.FindIdPasswordBtn>
      </S.SignUpBox>
      <S.Divider></S.Divider>
      <S.SocialLoginBtns>
        <S.SocialLoginBtn id="naver_id_login" onClick={props.NaverLogin}>
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
        <S.SocialLoginBtn onClick={props.onClickGoogleLogin}>
          <S.SocialLoginLogo src="/img/login/googlelogo.png" alt="googleLogo" />
        </S.SocialLoginBtn>
      </S.SocialLoginBtns>
    </S.Wrapper>
  );
}
