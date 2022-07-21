import React, { ReactNode, RefObject } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormSetValue,
} from "react-hook-form";

export interface LinkType {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLElement>;
}

export interface IFindIdUIProps {
  onClickShowContentsFirst: () => void;
  isClickedfirst: boolean;
  isClickedsecond: boolean;
  onClickShowContentsSecond: () => void;
  IdFindinputRef: RefObject<HTMLInputElement>;
  PasswordFindinputRef: RefObject<HTMLInputElement>;
  onSubmitFindId: (data: any) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  formState: FormState<FieldValues>;
}
