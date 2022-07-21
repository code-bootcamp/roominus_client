import { Dispatch, RefObject, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";

export interface ISignUpDetailUIProps {
  googleLoggedIn: any;
  kakaologgedIn: any;
  onClickLogoutkakao: any;
  onClickSocialIDLogout: any;
  googleEmail: any;
  kakaoEmail: any;
  handleSubmit: any;
  // handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  formState: FormState<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  onClickShowPassword: () => void;
  onClickShowPassword2: () => void;
  passwordInputRef: RefObject<HTMLInputElement>;
  password2InputRef: RefObject<HTMLInputElement>;
  verificationBtn: RefObject<HTMLButtonElement>;
  timeRef: RefObject<HTMLSpanElement>;
  openEye1: boolean;
  openEye2: boolean;
  onClickMoveToLogin: () => void;
  onSubmitSignup: (data: any) => Promise<void>;
  onClickVerifyMySelfByNo: () => Promise<void>;
  onClickMoveToPasswordRef: () => void;
  showCount: string;
  onClickCheckVerificationNo: () => Promise<void>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
  onChangeTokenValue: (event: any) => void;
  setTokenInput: Dispatch<SetStateAction<string>>;
}
