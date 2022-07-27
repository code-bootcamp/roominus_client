import { ChangeEvent, ReactNode } from "react";

export interface IFetchThemeMenus {
  reservation_time: string;
  people_number: number;
}
export interface IReservationUIProps {
  resultTime: any;
  timeTable: any;
  reservations: ReactNode;
  totalPrice: any;
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
