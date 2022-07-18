import { Dispatch, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IUpdateThemeReviewInput {
  rank?: string;
  content?: string;
  star?: number;
  clear?: boolean;
}

export interface IThemeCommentWriteProps {
  el?: any;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export interface IThemeCommentWriteUIProps {
  el: any;
  isEdit: Boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setValue: Function;
  trigger: Function;
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickUpdate: Function;
  onClickSubmit: Function;
}

export interface IDataProps {
  content: string;
  star: number;
  rank: string;
  clear: boolean;
}
