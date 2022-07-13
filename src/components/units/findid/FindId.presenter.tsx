import WebPurpleLoginButton from "../../commons/buttons/buttonDesktop/WebPurpleLoginButton";
import FindPassword from "../findpassword/FindPassword.container";
import * as S from "./FindId.styles";

export default function FindIdUI(props) {
  return (
    <>
      {!props.isClickedsecond && (
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
          <S.Form onSubmit={props.handleSubmit(props.onSubmitFindId)}>
            <S.NameBox>
              <S.TitleBox>
                <S.Name>이름</S.Name>
                <S.ImportantInfos>*</S.ImportantInfos>
              </S.TitleBox>
              <S.NameInput
                type="text"
                name="name"
                placeholder="홍길동"
                ref={props.IdFindinputRef}
                onChange={(e) => props.setValue("name", e.target.value)}
              />
            </S.NameBox>
            <S.Error>{props.formState.errors.name?.message}</S.Error>
            <S.EmailBox>
              <S.TitleBox>
                <S.Email>이메일</S.Email>
                <S.ImportantInfos>*</S.ImportantInfos>
              </S.TitleBox>
              <S.EmailInput
                type="text"
                name="email"
                placeholder="bubu123@gmail.com"
                onChange={(e) => props.setValue("email", e.target.value)}
              />
            </S.EmailBox>
            <S.Error>{props.formState.errors.email?.message}</S.Error>
            <WebPurpleLoginButton type="submit" title="확인" />
          </S.Form>
        </S.Wrapper>
      )}

      {props.isClickedsecond && (
        <FindPassword
          onClickShowContentsFirst={props.onClickShowContentsFirst}
          onClickShowContentsSecond={props.onClickShowContentsSecond}
          isClickedsecond={props.isClickedsecond}
          isClickedfirst={props.isClickedfirst}
          onSubmitVerificationEmail={props.onSubmitVerificationEmail}
          PasswordFindinputRef={props.PasswordFindinputRef}
        />
      )}
    </>
  );
}
