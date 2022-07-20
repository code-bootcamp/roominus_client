import * as S from "./SocialSignUpDetail.styles";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import {
  FormEventHandler,
  ReactChild,
  ReactFragment,
  ReactPortal,
  ChangeEventHandler,
  LegacyRef,
  MouseEventHandler,
} from "react";

// 타입 수정하세요!!
export default function SocialSignUpDetailUI(props: {
  handleSubmit: (arg0: any) => FormEventHandler<HTMLFormElement>;
  onSubmitSignup: any;
  kakaoInfo: { email: any };
  googleInfo: { email: any };
  setValue: (arg0: string, arg1: string) => void;
  trigger: (arg0: string) => void;
  setPhone: (arg0: string) => void;
  onClickVerifyMySelfByNo: any;
  formState: {
    errors: {
      phoneNumber: {
        message: boolean | ReactChild | ReactFragment | ReactPortal;
      };
    };
  };
  onChangeTokenValue: ChangeEventHandler<HTMLInputElement>;
  timeRef: LegacyRef<HTMLSpanElement>;
  showCount: boolean | ReactChild | ReactFragment | ReactPortal;
  verificationBtn: LegacyRef<HTMLButtonElement>;
  onClickCheckVerificationNo: MouseEventHandler<HTMLButtonElement>;
  onClickMoveToLogin: any;
}) {
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
                placeholder="인증번호를 입력하세요."
                onChange={props.onChangeTokenValue}
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
