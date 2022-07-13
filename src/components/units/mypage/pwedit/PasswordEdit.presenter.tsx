import * as S from "../pwedit/PasswordEdit.styles";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";

export default function PWeditUI(props) {
  return (
    <S.Container>
      <S.Title>비밀번호 수정</S.Title>
      <S.Form onSubmit={props.handleSubmit(props.onSubmitChangePassword)}>
        <S.PasswordBoxes>
          <S.PasswordBox>
            <S.TitleBox>
              <S.PasswordTitle>현재 비밀번호</S.PasswordTitle>
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
          </S.PasswordBox>
          <S.PasswordBox>
            <S.TitleBox>
              <S.PasswordTitle>새 비밀번호</S.PasswordTitle>
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
        <S.ButtonBox>
          <WebBlackButton type="reset" title="초기화" />
          <WebPurpleButton type="submit" title="수정하기" />
        </S.ButtonBox>
      </S.Form>
    </S.Container>
  );
}
