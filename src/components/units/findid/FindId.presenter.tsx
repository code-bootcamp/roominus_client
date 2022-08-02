import WebPurpleLoginButton from "../../commons/buttons/buttonDesktop/WebPurpleLoginButton";
import FindPassword from "../findpassword/FindPassword.container";
import * as S from "./FindId.styles";
import { IFindIdUIProps } from "./FindId.types";

export default function FindIdUI(props: IFindIdUIProps) {
  return (
    <>
      {!props.isClickedsecond && (
        <S.Wrapper>
          <S.Title>아이디 찾기</S.Title>
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
            <S.PhoneBox>
              <S.TitleBox>
                <S.Phone>전화번호</S.Phone>
                <S.ImportantInfos>*</S.ImportantInfos>
              </S.TitleBox>
              <S.PhoneInput
                ref={props.IdFindinputRef}
                type="text"
                name="phoneNumber"
                placeholder="01012345678"
                onChange={(e) => props.setValue("phoneNumber", e.target.value)}
              />
              <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
            </S.PhoneBox>
            <S.IDcheckBtn>확인</S.IDcheckBtn>
            {/* <WebPurpleLoginButton type="submit" title="확인" /> */}
          </S.Form>
        </S.Wrapper>
      )}

      {props.isClickedsecond && (
        <FindPassword
          onClickShowContentsFirst={props.onClickShowContentsFirst}
          onClickShowContentsSecond={props.onClickShowContentsSecond}
          isClickedsecond={props.isClickedsecond}
          isClickedfirst={props.isClickedfirst}
          PasswordFindinputRef={props.PasswordFindinputRef}
        />
      )}
    </>
  );
}
