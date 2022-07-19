import { ChangeEvent } from "react";

export interface IFetchThemeMenus {
  reservation_time: string;
  people_number: number;
}
export interface IReservationUIProps {
  totalPrice: any;
  usePoint: number;
  themeId: string;
  cafeId: string;
  reservationDate: string;
  time: string;
  uniqeTime: any;
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
  onChangeDate: (date: string) => void;
  onChangeHeadCount: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePoint: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMemo: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickReset: () => void;
  onChangeChecked: () => void;

  dateFormatter: (str: string) => string;
}
