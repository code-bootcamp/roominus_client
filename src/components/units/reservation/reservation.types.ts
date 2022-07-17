export interface IReservationUIProps {
  totalPrice: any;
  usePoint: number;
  themeId: string;
  cafeId: string;
  reservationDate: string;
  dateFormatter: string;
  time: string;
  uniqeTime: ["string"];
  peopleNumber: number;
  selectTime: any;
  checked: boolean;
  ThemeMenuId: string;
  memo: string;

  data?: any;

  themesList: {
    fetchThemes: any;
  };

  // onClickReset: () => void;
  // onChangeTheme: () => void;
  // onClickSubmit: (data: any) => void;
  // onChangeCafe: () => void;
  // onChangeDate: () => void;
  // onChangeTime: () => void;
  // onChangeHeadCount: () => void;
  // onChangePoint: () => void;
}
