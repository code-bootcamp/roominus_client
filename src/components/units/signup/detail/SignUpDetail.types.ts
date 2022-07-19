import { Dispatch, RefObject, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";

export interface ISignUpDetailUIProps {
  googleEmail: string | string[] | undefined;
  kakaoEmail: string | string[] | undefined;
  googleLoggedIn: string | string[] | undefined;
  kakaologgedIn: string | string[] | undefined;
  onClickSocialIDLogout: () => void;
  onClickLogoutkakao: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
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
}
