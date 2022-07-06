import * as S from "./FindPassword.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
export default function FindPasswordUI(props) {
  return (
    <>
      {!props.isOpenedPassword && (
        <S.Wrapper>
          <S.Title>아이디 찾기 및 비밀번호 재설정</S.Title>
          <S.TabBtns>
            <S.TabFirst
              onClick={props.onClickShowContentsFirst}
              isClickedfirst={props.isClickedfirst}
            >
              아이디 찾기
            </S.TabFirst>
            <S.TabSecond
              onClick={props.onClickShowContentsSecond}
              isClickedsecond={props.isClickedsecond}
            >
              비밀번호 재설정
            </S.TabSecond>
          </S.TabBtns>
          <S.Form onSubmit={props.onSubmitVerificationEmail}>
            <S.NameBox>
              <S.Name>이름💥</S.Name>
              <S.NameInput type="text" placeholder="홍길동" />
            </S.NameBox>
            <S.PhoneNoBox>
              <S.PhoneNo>핸드폰 번호💥</S.PhoneNo>
              <S.PhoneNoInput type="text" placeholder="010-1234-5678" />
            </S.PhoneNoBox>
            <S.ConfirmBtn>확인</S.ConfirmBtn>
          </S.Form>
        </S.Wrapper>
      )}

      {props.isOpenedPassword && (
        <S.Wrapper>
          <S.Title>비밀번호 재설정</S.Title>
          <S.Form>
            <S.PassWordBox>
              <S.PassWord>비밀번호💥</S.PassWord>
              <S.InputBoxes>
                <S.PassWordInput type="text" />
                <FontAwesomeIcon
                  icon={faEye}
                  style={{
                    color: "purple",
                    fontSize: "1.5em",
                    cursor: "pointer",
                  }}
                />
              </S.InputBoxes>
            </S.PassWordBox>
            <S.PasswordVerificationBox>
              <S.PasswordVerification>비밀번호 확인💥</S.PasswordVerification>
              <S.InputBoxes>
                <S.PasswordVerificationInput type="text" />
                <FontAwesomeIcon
                  icon={faEye}
                  style={{
                    color: "purple",
                    fontSize: "1.5em",
                    cursor: "pointer",
                  }}
                />
              </S.InputBoxes>
            </S.PasswordVerificationBox>
            <S.ConfirmBtn>비밀번호 변경</S.ConfirmBtn>
          </S.Form>
        </S.Wrapper>
      )}
    </>
  );
}
