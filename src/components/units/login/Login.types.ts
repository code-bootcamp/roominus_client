import { RefObject } from "react";
import {
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
  handleSubmit: any;
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
