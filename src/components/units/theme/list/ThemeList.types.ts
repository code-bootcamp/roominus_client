export interface IThemeListProps {
  data?: any;
  fetchGenres?: any;
  isToggled?: boolean;
  onClickToggled?: () => void;
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

export interface IFetchGenres {
  id: string;
  name: string;
}
