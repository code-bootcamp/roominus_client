import { Dispatch, MouseEvent, RefObject, SetStateAction } from "react";

export interface IFetchThemes {
  id: string;
  mainImg: string;
  rank: number;
  genre?: { name: string; id: string } | any;
  title: string;
  intro_title: string;
  intro_content: string;
  clearTime: string;
  agelimit?: number;
  peoplelimit: number;
  like: number;
}

export interface IThemeListProps {
  data?: any;
  more: boolean;
  themesAll?: any;
  fetchGenres?: any;
  isToggled?: boolean;
  myIndex: Array<boolean>;
  selectAll: boolean;
  setSelectAll: Dispatch<SetStateAction<boolean>>;
  searchInputRef: RefObject<HTMLInputElement>;
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

export interface IStyleProps {
  src: string;
}

export interface ICarouselProps {
  data: any;
  onClickTheme: (el: IFetchThemes) => () => void;
}
