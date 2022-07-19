import { RefObject } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormSetValue,
} from "react-hook-form";

export interface IFindPasswordUIProps {
  onClickShowContentsFirst: any;
  onClickShowContentsSecond: any;
  isClickedsecond: any;
  isClickedfirst: any;
  onSubmitVerificationEmail: () => void;
  PasswordFindinputRef: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  formState: FormState<FieldValues>;
}
export interface IFindPasswordProps {
  onClickShowContentsFirst: () => void;
  onClickShowContentsSecond: () => void;
  isClickedsecond: true;
  isClickedfirst: boolean;
  PasswordFindinputRef: RefObject<HTMLInputElement>;
}
