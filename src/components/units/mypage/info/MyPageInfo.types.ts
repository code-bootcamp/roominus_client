import { MouseEventHandler } from "react";

export interface IMyPageInfoUIProps {
  onClickReservationDetail: MouseEventHandler<HTMLDivElement>;
  reservation: {
    fetchReservationsUser: any;
  };
  payments: {
    fetchPayments: any;
  };
}

export interface IFetchReservationUser {
  cafe: any;
  theme_menu: any;
  id: string;
  status: string;
  reservation_date: string;
}

export interface IFetchPayments {
  imp_uid: string;
  usepoint: number;
  price: number;
  merchant_uid: string;
  id: string;
  title: string;
  writer: string;
  createdAt: string;
}
