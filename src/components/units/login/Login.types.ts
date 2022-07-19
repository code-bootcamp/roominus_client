import { RefObject } from "react";
import {
  UseFormHandleSubmit,
  UseFormSetValue,
  FormState,
  UseFormTrigger,
  FieldValues,
} from "react-hook-form";

export interface IDataProps {
  email: string;
  password: string;
}

export interface ILoginUIProps {
  onClickGoogleLogin: () => void;
  onClickLoginKakao: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmitLogin: (data: IDataProps) => Promise<void>;
  setValue: UseFormSetValue<FieldValues>;
  formState: FormState<FieldValues>;
  openEye: boolean;
  trigger: UseFormTrigger<FieldValues>;
  onClickMoveToSignUp: () => void;
  passwordInputRef: RefObject<HTMLInputElement>;
  onClickShowPassword: () => void;
  onClickMoveToFindIdPassword: () => void;
}
