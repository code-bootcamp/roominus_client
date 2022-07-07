import { faEye } from "@fortawesome/free-regular-svg-icons";
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
      <S.FormFirst>
        <S.EmailBox>
          <S.EmailTitle>이메일 아이디💥</S.EmailTitle>
          <S.EmailInputBox>
            <S.EmailInput type="text" value={props.email2 || props.email} />
            <S.NextBtn>다음</S.NextBtn>
          </S.EmailInputBox>
          <S.Error>아이디를 입력해주세요.</S.Error>
        </S.EmailBox>
        <S.PasswordBoxes>
          <S.PasswordBox>
            <S.PasswordTitle>비밀번호💥</S.PasswordTitle>
            <S.PasswordInputBox>
              <S.PasswordInput type="password" />
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  color: "purple",
                  fontSize: "1.5em",
                  cursor: "pointer",
                }}
              />
            </S.PasswordInputBox>
            <S.Error>비밀번호를 다시 입력하세요.</S.Error>
            <S.WarningBox>
              <S.WarningMessage>
                *8~14자의 영문,숫자 혼합만 사용가능
              </S.WarningMessage>
              <S.WarningMessage>
                *숫자만으로 이루어진 비밀번호는 사용 할 수 없음
              </S.WarningMessage>
              <S.WarningMessage>
                *아이디가 포함된 문자는 사용 할 수 없음
              </S.WarningMessage>
              <S.WarningMessage>
                *같은 문자를 4번 이상 사용 할 수 없음
              </S.WarningMessage>
            </S.WarningBox>
          </S.PasswordBox>
        </S.PasswordBoxes>
        <S.PasswordVerificationBoxes>
          <S.PasswordVerificationBox>
            <S.PasswordVerificationTitle>
              비밀번호 확인💥
            </S.PasswordVerificationTitle>
            <S.PasswordVerificationInputBox>
              <S.PasswordVerificationInput type="password" />
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  color: "purple",
                  fontSize: "1.5em",
                  cursor: "pointer",
                }}
              />
            </S.PasswordVerificationInputBox>
            <S.Error>비밀번호가 일치하지않습니다.</S.Error>
          </S.PasswordVerificationBox>
        </S.PasswordVerificationBoxes>
        <S.NameBoxes>
          <S.NameBox>
            <S.NameTitle>이름💥</S.NameTitle>
            <S.NameInputBox>
              <S.NameInput type="text" />
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  color: "purple",
                  fontSize: "1.5em",
                  cursor: "pointer",
                }}
              />
            </S.NameInputBox>
            <S.Error>이름을 입력해주세요.</S.Error>
          </S.NameBox>
        </S.NameBoxes>
      </S.FormFirst>
      <S.PhoneNoBox>
        <S.PhoneNoTitle>휴대폰번호✷</S.PhoneNoTitle>
        <S.PhoneNoInputBox>
          <S.PhoneNoInput type="text" placeholder="010-1234-5678" />
          <S.AuthenticationBtn>인증</S.AuthenticationBtn>
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
      <S.FormSecond>
        <S.SignUpBtn>가입하기</S.SignUpBtn>
        <S.CancelBtn
          type="button"
          onClick={
            (props.email && props.onClickSocialIDLogout) ||
            (props.email2 && props.onClickLogoutkakao)
          }
        >
          취소하기
        </S.CancelBtn>
      </S.FormSecond>
    </S.Wrapper>
  );
}
