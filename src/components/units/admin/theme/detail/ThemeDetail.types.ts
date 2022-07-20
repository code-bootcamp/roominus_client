export interface IThemeDetailUIProps {
  ThemeDetail: {
    fetchTheme: {
      id: string;
      title?: string;
      mainImg?: string;
      intro_title?: string;
      intro_content?: string;
      rank?: number;
      agelimit?: number;
      peoplelimit?: number;
      clearTime?: number;
      like?: number;
      cafe?: {
        name: string;
      };
      genre?: {
        name: string;
      };
    };
  };
  onClickList: () => void;
  onClickEdit: (themeId: string) => () => void;
  onClickDelete: () => Promise<void>;
  onClickMoveToCreateThemeMenu: () => void;
}
