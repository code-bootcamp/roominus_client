import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./SignUpDetail.styles";

import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import dynamic from "next/dynamic";
import { ISignUpDetailUIProps } from "./SignUpDetail.types";

const PasswordChecklist = dynamic(() => import("react-password-checklist"), {
  ssr: false,
});

export default function SignUpDetailUI(props: ISignUpDetailUIProps) {
  return (
    <S.Wrapper>
      <S.Title>기본정보</S.Title>
      <S.FormFirst onSubmit={props.handleSubmit(props.onSubmitSignup)}>
        <S.EmailBox>
          <S.TitleBox>
            <S.EmailTitle>이메일</S.EmailTitle>
            <S.ImportantInfos>*</S.ImportantInfos>
          </S.TitleBox>
          <S.EmailInputBox>
            <S.EmailInput
              type="text"
              onChange={(e) => {
                props.setValue("email", e.target.value);
                props.trigger("email");
              }}
              name="email"
            />
            <WebPurpleButton
              type="button"
              title="다음"
              onClick={props.onClickMoveToPasswordRef}
            />
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
                onChange={(e) => {
                  props.setValue("password", e.target.value);
                  props.trigger("password");
                  props.setPassword(e.target.value);
                }}
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
                    position: "absolute",
                    top: "0.6em",
                    right: "1.5em",
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
                    position: "absolute",
                    top: "0.6em",
                    right: "1.5em",
                  }}
                />
              )}
            </S.PasswordInputBox>
            <S.Error>{props.formState.errors.password?.message}</S.Error>
            <PasswordChecklist
              rules={["minLength", "lowercase", "number"]}
              minLength={8}
              maxLength={14}
              value={props.password}
              iconSize={10}
              messages={{
                minLength: "최소 8자리 이상 입력해야 합니다.",
                lowercase: "영문(소문자)을 포함해야 합니다.",
                number: "숫자를 포함해야 합니다.",
              }}
            />
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
                onChange={(e) => {
                  props.setValue("password2", e.target.value);
                  props.trigger("password2");
                }}
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
                    position: "absolute",
                    top: "2.1em",
                    right: "1.5em",
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
                    position: "absolute",
                    top: "2.1em",
                    right: "1.5em",
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
                onChange={(e) => {
                  props.setValue("name", e.target.value);
                  props.trigger("name");
                }}
                name="name"
              />
            </S.NameInputBox>
            <S.Error>{props.formState.errors.name?.message}</S.Error>
          </S.NameBox>
        </S.NameBoxes>
        <S.PhoneNoBox>
          <S.TitleBox>
            <S.PhoneNoTitle>휴대폰번호</S.PhoneNoTitle>
            <S.ImportantInfos>*</S.ImportantInfos>
          </S.TitleBox>
          <S.PhoneNoInputBox>
            <S.PhoneNoInput
              type="text"
              name="phoneNumber"
              placeholder="01012345678 "
              onChange={(e) => {
                props.setValue("phoneNumber", e.target.value);
                props.trigger("phoneNumber");
                props.setPhone(e.target.value);
              }}
            />
            <WebPurpleButton
              onClick={props.onClickVerifyMySelfByNo}
              type="button"
              title="인증"
            />
          </S.PhoneNoInputBox>
          <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
          <S.VerificationInputBox>
            <S.VerificationNoBox>
              <S.VerificationNoInput
                type="text"
                name="phoneToken"
                placeholder="인증번호를 입력해주세요."
                onChange={(e) => {
                  props.setValue("phoneToken", e.target.value);
                  props.trigger("phoneToken");
                  props.setTokenInput(e.target.value);
                }}
              />
              <S.TimeOut ref={props.timeRef}>{props.showCount}</S.TimeOut>
            </S.VerificationNoBox>
            <S.ConfirmBtn
              type="button"
              ref={props.verificationBtn}
              onClick={props.onClickCheckVerificationNo}
            >
              확인
            </S.ConfirmBtn>
          </S.VerificationInputBox>
          <S.Error>{props.formState.errors.phoneToken?.message}</S.Error>
        </S.PhoneNoBox>
        <S.SignUpBtns>
          <WebBlackButton
            type="button"
            onClick={props.onClickMoveToLogin}
            title="취소하기"
          />
          <WebPurpleButton title="가입하기" />
        </S.SignUpBtns>
      </S.FormFirst>
    </S.Wrapper>
  );
}
