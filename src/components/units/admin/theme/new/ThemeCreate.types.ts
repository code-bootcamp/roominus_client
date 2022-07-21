import { ChangeEvent } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ICreateThemeData {
  cafeName: string;
  genreName: string;
  title: string;
  intro_title: string;
  intro_content: string;
  agelimit: number;
  peoplelimit: number;
  clearTime: number;
}

export interface IUpdateThemeInput {
  title?: string;
  rank?: number;
  intro_title?: string;
  intro_content?: string;
  agelimit?: number;
  peoplelimit?: number;
  clearTime?: number;
  mainImg?: string;
}

export interface IThemeCreateProps {
  themeUpdateData?: any;
  isEdit?: boolean;
}

export interface IThemeCreateUIProps {
  isEdit?: boolean;
  imgurl: string;
  imgRef: any;

  value?: number;
  themeUpdateData?: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  setValue: (value: number) => void;
  onClickRealInput: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onSubmitCreateTheme: any;
  onSubmitUpdateTheme: any;
}
