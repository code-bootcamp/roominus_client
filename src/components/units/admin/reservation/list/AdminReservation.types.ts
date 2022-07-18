import { ChangeEventHandler } from "react";

export interface IData {
  payment: any;
  id: string;
  reservation_date: string;
  status: string;
  memo: string;
  user: {
    name: string;
    phone: string;
  };
  theme_menu: {
    id: string;
    reservation_time: string;
    people_number: number;
    price: number;
  };
}
export interface IAdminReservationListProps {
  data: any;
  onChangeCafeId: ChangeEventHandler<HTMLSelectElement> | undefined;
  cafeList: any;
  onChangeDate: ChangeEventHandler<HTMLInputElement> | undefined;
  onClickRefund: any;
}
