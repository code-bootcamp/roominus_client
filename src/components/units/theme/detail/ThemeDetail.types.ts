import { MouseEventHandler } from "react";

export interface IThemeDetailProps {
  onClickReservation: MouseEventHandler<HTMLButtonElement>;
  love: boolean;
  data?: any;
  isToggled?: boolean;
  onClickToggled?: () => void;
  onClickLove?: () => void;
  onClickMoveToList?: () => void;
}

export interface IFetchThemeData {
  userId: string;
}
