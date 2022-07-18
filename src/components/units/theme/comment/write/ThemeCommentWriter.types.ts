import { Dispatch, SetStateAction } from "react";

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
  handleSubmit: Function;
  register: Function;
  onClickUpdate: (event: MouseEvent) => void;
  onClickSubmit: (event: MouseEvent) => void;
}

export interface IDataProps {
  content: string;
  star: number;
  rank: string;
  clear: boolean;
}
