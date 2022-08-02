import WebPurpleLoginButton from "../../commons/buttons/buttonDesktop/WebPurpleLoginButton";
import * as S from "./FindPassword.styles";
import { IFindPasswordUIProps } from "./FindPassword.types";

export default function FindPasswordUI(props: IFindPasswordUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>비밀번호 재설정</S.Title>
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
        <S.Form onSubmit={props.handleSubmit(props.onSubmitVerificationEmail)}>
          <S.NameBox>
            <S.TitleBox>
              <S.Name>이메일</S.Name>
              <S.ImportantInfos>*</S.ImportantInfos>
            </S.TitleBox>
            <S.NameInput
              type="text"
              name="email"
              placeholder="email"
              ref={props.PasswordFindinputRef}
              onChange={(e) => props.setValue("email", e.target.value)}
            />
            <S.Error>{props.formState.errors.email?.message}</S.Error>
          </S.NameBox>
          <S.PhoneNoBox>
            <S.TitleBox>
              <S.PhoneNo>핸드폰 번호</S.PhoneNo>
              <S.ImportantInfos>*</S.ImportantInfos>
            </S.TitleBox>
            <S.PhoneNoInput
              type="text"
              placeholder="01012345678"
              name="phoneNumber"
              onChange={(e) => props.setValue("phoneNumber", e.target.value)}
            />
            <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
          </S.PhoneNoBox>

          <S.IDcheckBtn>확인</S.IDcheckBtn>
          {/* <WebPurpleLoginButton type="submit" title="확인" /> */}
        </S.Form>
      </S.Wrapper>
    </>
  );
}
