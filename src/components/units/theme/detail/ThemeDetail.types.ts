export interface IThemeDetailProps {
  love: boolean;
  data?: any;
  isToggled?: boolean;
  onClickToggled?: () => void;
  onClickLove?: () => void;
}

export interface IFetchThemeData {
  userId: string;
}
