import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./SignUpDetail.styles";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function SignUpDetailUI(props) {
  const router = useRouter();
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    document.head.appendChild(script);

    script.onload = () => {
      window.Kakao.init("d5cc36e815debd3853b9a59ec62d144b");
      window.Kakao.isInitialized();
    };
  }, []);
  return (
    <S.Wrapper>
      <Head></Head>
      <S.Title>기본정보</S.Title>
      <S.FormFirst onSubmit={props.handleSubmit(props.onSubmitSignup)}>
        <S.EmailBox>
          <S.TitleBox>
            <S.EmailTitle>이메일 아이디</S.EmailTitle>
            <S.ImportantInfos>*</S.ImportantInfos>
          </S.TitleBox>
          <S.EmailInputBox>
            <S.EmailInput
              type="text"
              value={props.kakaoEmail || props.googleEmail}
              onChange={(e) => props.setValue("email", e.target.value)}
              name="email"
            />
            <S.NextBtn type="button" onClick={props.onClickMoveToPasswordRef}>
              다음
            </S.NextBtn>
          </S.EmailInputBox>
          <S.Error>{props.formState.errors.email?.message}</S.Error>
        </S.EmailBox>
        <S.PasswordBoxes>
          <S.PasswordBox>
            <S.TitleBox>
              <S.PasswordTitle>비밀번호</S.PasswordTitle>
              <S.ImportantInfos>*</S.ImportantInfos>
            </S.TitleBox>
            <S.PasswordInputBox>
              <S.PasswordInput
                onChange={(e) => props.setValue("password", e.target.value)}
                name="password"
                ref={props.passwordInputRef}
                type="password"
              />
              {props.openEye1 && (
                <FontAwesomeIcon
                  icon={faEye}
                  style={{
                    color: "purple",
                    fontSize: "1.5em",
                    cursor: "pointer",
                  }}
                />
              )}
              {!props.openEye1 && (
                <FontAwesomeIcon
                  onClick={props.onClickShowPassword}
                  icon={faEyeSlash}
                  style={{
                    color: "purple",
                    fontSize: "1.5em",
                    cursor: "pointer",
                  }}
                />
              )}
            </S.PasswordInputBox>
            <S.Error>{props.formState.errors.password?.message}</S.Error>
            <S.WarningBox>
              <S.WarningMessage>
                *8~14자의 영문,숫자 혼합만 사용가능
              </S.WarningMessage>
              <S.WarningMessage>
                *숫자만으로 이루어진 비밀번호는 사용 할 수 없음
              </S.WarningMessage>
            </S.WarningBox>
          </S.PasswordBox>
        </S.PasswordBoxes>
        <S.PasswordVerificationBoxes>
          <S.PasswordVerificationBox>
            <S.TitleBox>
              <S.PasswordVerificationTitle>
                비밀번호 확인
              </S.PasswordVerificationTitle>
              <S.ImportantInfos>*</S.ImportantInfos>
            </S.TitleBox>
            <S.PasswordVerificationInputBox>
              <S.PasswordVerificationInput
                onChange={(e) => props.setValue("password2", e.target.value)}
                name="password2"
                ref={props.password2InputRef}
                type="password"
              />
              {props.openEye2 && (
                <FontAwesomeIcon
                  icon={faEye}
                  style={{
                    color: "purple",
                    fontSize: "1.5em",
                    cursor: "pointer",
                  }}
                />
              )}
              {!props.openEye2 && (
                <FontAwesomeIcon
                  onClick={props.onClickShowPassword2}
                  icon={faEyeSlash}
                  style={{
                    color: "purple",
                    fontSize: "1.5em",
                    cursor: "pointer",
                  }}
                />
              )}
            </S.PasswordVerificationInputBox>
            <S.Error>{props.formState.errors.password2?.message}</S.Error>
          </S.PasswordVerificationBox>
        </S.PasswordVerificationBoxes>
        <S.NameBoxes>
          <S.NameBox>
            <S.TitleBox>
              <S.NameTitle>이름</S.NameTitle>
              <S.ImportantInfos>*</S.ImportantInfos>
            </S.TitleBox>
            <S.NameInputBox>
              <S.NameInput
                type="text"
                onChange={(e) => props.setValue("name", e.target.value)}
                name="name"
              />
            </S.NameInputBox>
            <S.Error>{props.formState.errors.name?.message}</S.Error>
          </S.NameBox>
        </S.NameBoxes>
      </S.FormFirst>
      <S.PhoneNoBox>
        <S.PhoneNoTitle>휴대폰번호✷</S.PhoneNoTitle>
        <S.PhoneNoInputBox>
          <S.PhoneNoInput
            type="text"
            placeholder="010-1234-5678"
            onChange={props.onChangeGetPhoneNo}
          />
          <S.AuthenticationBtn onClick={props.onClickVerifyMySelfByNo}>
            인증
          </S.AuthenticationBtn>
        </S.PhoneNoInputBox>
        <S.VerificationInputBox>
          <S.VerificationNoBox>
            <S.VerificationNoInput
              type="text"
              placeholder="인증번호를 입력하세요."
            />
            <S.TimeOut>3:00</S.TimeOut>
          </S.VerificationNoBox>

          <S.VerificationBtn>확인</S.VerificationBtn>
        </S.VerificationInputBox>
      </S.PhoneNoBox>
      <S.FormSecond onSubmit={props.handleSubmit(props.onSubmitSignup)}>
        <S.SignUpBtn>가입하기</S.SignUpBtn>
        <S.CancelBtn
          type="button"
          onClick={
            (props.googleLoggedIn && props.onClickSocialIDLogout) ||
            (props.kakaologgedIn && props.onClickLogoutkakao) ||
            props.onClickMoveToLogin
          }
        >
          취소하기
        </S.CancelBtn>
      </S.FormSecond>
    </S.Wrapper>
  );
}
