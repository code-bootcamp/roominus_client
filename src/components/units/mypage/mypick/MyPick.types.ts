import { MouseEventHandler } from "react";

export interface IfetchUserLikeThemesProps {
  theme: any;
  id: string;
  mainImg: string;
  title: string;
  like: number;
}

export interface IMyPickUIProps {
  refetch: any;
  count: any;
  onClickMoveToThemeDetail: MouseEventHandler<HTMLSpanElement>;
  id: string;
  data: any;
}
