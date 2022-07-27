import { LegacyRef } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormTrigger,
} from "react-hook-form";

export interface IPWeditUIProps {
  password: string;
  password2InputRef: LegacyRef<HTMLInputElement> | undefined;
  passwordInputRef: LegacyRef<HTMLInputElement> | undefined;
  setPassword: any;
  trigger: UseFormTrigger<FieldValues>;
  openEye1: boolean;
  openEye2: boolean;

  setValue: Function;
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;

  onSubmitChangePassword: any;
  onClickShowPassword1: () => void;
  onClickShowPassword2: () => void;
}
