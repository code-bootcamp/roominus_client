import { RefObject } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormSetValue,
} from "react-hook-form";

export interface IFindIdUIProps {
  onClickShowContentsFirst: () => void;
  isClickedfirst: boolean;
  onClickShowContentsSecond: () => void;
  isClickedsecond: boolean;
  IdFindinputRef: RefObject<HTMLInputElement>;
  PasswordFindinputRef: RefObject<HTMLInputElement>;
  onSubmitFindId: (data: any) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  formState: FormState<FieldValues>;
}
