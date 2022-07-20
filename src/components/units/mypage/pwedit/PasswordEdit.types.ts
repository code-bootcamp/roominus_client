import { LegacyRef, MouseEventHandler } from "react";
import { FieldValues, FormState, UseFormHandleSubmit } from "react-hook-form";

export interface IPWeditUIProps {
  password2InputRef: LegacyRef<HTMLInputElement> | undefined;
  password: string;
  onClickShowPassword1: MouseEventHandler<SVGSVGElement> | undefined;
  // eslint-disable-next-line no-undef
  openEye1: JSX.Element;
  // eslint-disable-next-line no-undef
  openEye2: JSX.Element;
  passwordInputRef: LegacyRef<HTMLInputElement> | undefined;
  setPassword: any;
  onClickShowPassword: MouseEventHandler<SVGSVGElement> | undefined;
  // eslint-disable-next-line no-undef
  openEye: JSX.Element;
  originpasswordInputRef: LegacyRef<HTMLInputElement> | undefined;
  setValue: Function;
  trigger: Function;
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;

  onSubmitChangePassword: any;
}
