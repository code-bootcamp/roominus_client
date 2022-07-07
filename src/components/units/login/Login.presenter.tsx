import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import * as S from "./Login.styles";
export default function LoginUI(props) {
  return (
    <S.Wrapper>
      <S.Title>로그인</S.Title>
      <S.Form>
        <S.IDdBox>
          <S.Input type="text" placeholder="아이디를 입력해주세요" />
        </S.IDdBox>
        <S.Error>아이디를 입력해주세요</S.Error>
        <S.PasswordBox>
          <S.Input type="password" placeholder="비밀번호를 입력해주세요" />
          <FontAwesomeIcon
            icon={faEye}
            style={{ color: "purple", fontSize: "1.5em", cursor: "pointer" }}
          />
        </S.PasswordBox>
        <S.Error>비밀번호를 입력해주세요</S.Error>
        <S.LoginBtn>로그인하기</S.LoginBtn>
      </S.Form>
      <S.SignUpBox>
        <S.SignupLabel>아직 계정이 없으신가요?</S.SignupLabel>
        <S.SignUpbtn>회원가입</S.SignUpbtn>
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
