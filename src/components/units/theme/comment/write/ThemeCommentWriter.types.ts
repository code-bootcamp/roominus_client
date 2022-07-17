import { Dispatch, SetStateAction } from "react";

export interface IUpdateThemeReviewInput {
  rank?: string;
  content?: string;
  star?: number;
  clear?: boolean;
}

export interface IThemeCommentWriteProps {
  el?: any;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export interface IDataProps {
  content: string;
  star: number;
  rank: string;
  clear: boolean;
}
