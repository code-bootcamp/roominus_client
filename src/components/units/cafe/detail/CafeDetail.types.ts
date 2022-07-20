import { MouseEvent } from "react";

export interface IFetchThemesOnTheme {
  id: string;
  title: string;
  mainImg: string;
}

export interface ICafeDetailUI {
  tabKey: string;
  onChangeKey: (key: string) => void;
  onClickList: () => void;
  onClickTheme: (
    el: IFetchThemesOnTheme
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  data?: {
    fetchCafe: {
      mainImg: string;
      name: string;
      address: string;
      phone: string;
      intro_content: string;
      address_detail: string;
    };
  };
  themeData?: {
    fetchThemesOnTheme: any;
  };
}
