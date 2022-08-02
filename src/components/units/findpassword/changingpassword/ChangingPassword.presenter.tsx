import * as S from "./ChangingPassword.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { IChangingPasswordUIProps } from "./ChangingPassword.types";
export default function ChangingPasswordUI(props: IChangingPasswordUIProps) {
  return (
    <S.Wrapper>
      <S.Title>비밀번호 재설정</S.Title>
      <S.Form onSubmit={props.handleSubmit(props.onSubmitChangingPassword)}>
        <S.PassWordBox>
          <S.TitleBox>
            <S.PassWord>비밀번호</S.PassWord>
            <S.ImportantInfos>*</S.ImportantInfos>
          </S.TitleBox>
          <S.InputBoxes>
            <S.PassWordInput
              type="password"
              name="password"
              onChange={(e) => {
                props.setValue("password", e.target.value);
                props.trigger("password");
              }}
              ref={props.passwordInputRef}
            />
            {props.openEye1 && (
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  color: "purple",
                  fontSize: "1.5em",
                  cursor: "pointer",
                  position: "absolute",
                  top: "0em",
                  right: "1em",
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
                  top: "0em",
                  right: "1em",
                }}
              />
            )}
          </S.InputBoxes>
          <S.Error>{props.formState.errors.password?.message}</S.Error>
        </S.PassWordBox>
        <S.PasswordVerificationBox>
          <S.TitleBox>
            <S.PasswordVerification>비밀번호 확인</S.PasswordVerification>
            <S.ImportantInfos>*</S.ImportantInfos>
          </S.TitleBox>
          <S.InputBoxes>
            <S.PasswordVerificationInput
              ref={props.password2InputRef}
              type="password"
              name="password2"
              onChange={(e) => {
                props.setValue("password2", e.target.value);
                props.trigger("password2");
              }}
            />
            {props.openEye2 && (
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  color: "purple",
                  fontSize: "1.5em",
                  cursor: "pointer",
                  position: "absolute",
                  top: "0em",
                  right: "1em",
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
                  top: "0em",
                  right: "1em",
                }}
              />
            )}
          </S.InputBoxes>
          <S.Error>{props.formState.errors.password2?.message}</S.Error>
        </S.PasswordVerificationBox>
        <S.IDcheckBtn>비밀번호 변경</S.IDcheckBtn>
      </S.Form>
    </S.Wrapper>
  );
}
