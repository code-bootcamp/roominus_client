import { RefObject } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormSetValue,
} from "react-hook-form";

export interface IChangingPasswordUIProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  formState: FormState<FieldValues>;
  passwordInputRef: RefObject<HTMLInputElement>;
  password2InputRef: RefObject<HTMLInputElement>;
  openEye1: boolean;
  openEye2: boolean;
  onClickShowPassword: () => void;
  onClickShowPassword2: () => void;
  onSubmitChangingPassword: (data: any) => void;
}
