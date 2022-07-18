import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IFetchThemes {
  id: string;
  mainImg?: string;
  rank: number;
  genre?: { name: string; id: string } | any;
  title: string;
  agelimit?: number;
}

export interface IThemeListProps {
  data?: any;
  fetchGenres?: any;
  isToggled?: boolean;
  myIndex: Array<boolean>;
  selectAll: boolean;
  setSelectAll: Dispatch<SetStateAction<boolean>>;
  onClickMoreButton: () => void;
  onClickToggled?: () => void;
  onClickTheme: (el: IFetchThemes) => () => void;
  onClickGenre: (
    name: string,
    i: number
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  onClickAllGenre: () => void;
}

export interface IFetchGenres {
  id: string;
  name: string;
}
