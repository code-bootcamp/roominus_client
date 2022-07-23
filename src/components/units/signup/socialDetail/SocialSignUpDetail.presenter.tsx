import * as S from "./SocialSignUpDetail.styles";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import { ISocialSignUpDetailUIProps } from "./SocialSignUpDetail.types";

export default function SocialSignUpDetailUI(
  props: ISocialSignUpDetailUIProps
) {
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
              value={props.kakaoInfo.email || props.googleInfo.email}
            />
          </S.EmailInputBox>
        </S.EmailBox>
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
          <S.WebPurpleSignUpButton type="submit">
            가입하기
          </S.WebPurpleSignUpButton>
        </S.SignUpBtns>
      </S.FormFirst>
    </S.Wrapper>
  );
}
