import { MouseEventHandler } from "react";

export interface IfetchUserLikeThemesProps {
  id: string;
  mainImg: string;
  title: string;
  like: number;
}

export interface IMyPickUIProps {
  onClickMoveToThemeDetail: MouseEventHandler<HTMLSpanElement>;
  id: string;
  data: any;
}
