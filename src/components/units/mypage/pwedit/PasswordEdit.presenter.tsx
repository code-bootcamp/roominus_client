import * as S from "./PasswordEdit.styles";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";

export default function PWeditUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.PasswordBoxes>
          <S.PasswordBox>
            <S.PasswordTitle>현재 비밀번호 *</S.PasswordTitle>
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

            <S.PasswordTitle>새 비밀번호 *</S.PasswordTitle>
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
              비밀번호 확인 *
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
        <S.ButtonBox>
          <WebBlackButton type="reset" title="취소하기"></WebBlackButton>
          <WebPurpleButton type="submit" title="변경하기"></WebPurpleButton>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
