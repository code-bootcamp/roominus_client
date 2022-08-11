import { ChangeEvent, ReactNode } from "react";

export interface IFetchThemeMenus {
  reservation_time: string;
  people_number: number;
}
export interface IReservationUIProps {
  themeMenus: {
    fetchThemeMenus: {
      length: any;
      map(arg0: (el: any) => any): ReactNode;
      0: {
        theme: {
          id: string;
          mainImg: string;
          title: string;
          intro_title: string;
          intro_content: string;
          rank: number;
          clearTime: string;
          peoplelimit: number;
          agelimit: number;
        };
        cafe: { id: string; address: string; name: string };
      };
    };
  };
  resultTime: any;
  timeTable: any;
  reservations: ReactNode;
  totalPrice: number;
  usePoint: number;
  themeId: string;
  cafeId: string;
  reservationDate: string;
  time: string;
  peopleNumber: number;
  selectTime: any;
  checked: boolean;
  ThemeMenuId: string;
  memo: string;
  max: number;

  data?: any;

  themesList: {
    fetchThemesAll: any;
  };

  onChangeTheme: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCafe: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTime: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeDate: any;
  onChangeHeadCount: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePoint: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMemo: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickReset: () => void;
  onChangeChecked: () => void;

  dateFormatter: (str: string) => string;
}
