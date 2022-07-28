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
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}

export interface IWriteCommentData {
  star: number;
  content: string;
  rank: string;
  clear: boolean;
}

export interface IFetchReservationData {
  theme_menu: {
    theme: {
      id: string;
    };
  };
}

export interface IFetchThemeReviewsData {
  id: string;
  user: {
    id: string;
  };
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
  onClickUpdate: any;
  onClickSubmit: any;
}

export interface IDataProps {
  content: string;
  star: number;
  rank: string;
  clear: boolean;
}

export interface IStylesProps {
  selected?: boolean;
  checked?: boolean;
  isEdit?: Boolean;
}
