export interface IThemeListUIProps {
  data: any;
  onClickMoveToThemeDetail: (themeId: string) => () => void;
}

export interface IFetchThemesData {
  id: string;
}

export interface IThemeListUIItemProps {
  ThemeData: {
    id: string;
    mainImg?: string;
    title?: string;
    intro_title?: string;
    rank?: number;
    agelimit?: number;
    peoplelimit?: number;
    cafe?: {
      name: string;
    };
    genre?: {
      name: string;
    };
    clearTime?: number;
    like?: number;
  };
  onClickMoveToThemeDetail: Function;
}
