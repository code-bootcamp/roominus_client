export interface IThemeListProps {
  data?: any;
  isToggled: boolean;
  onClickToggled: () => void;
  onClickTheme: (el: any) => () => void;
}

export interface IFetchThemes {
  id: string;
  mainImg?: string;
  rank: number;
  genre?: { name: string; id: string } | any;
  title: string;
  agelimit?: number;
}
