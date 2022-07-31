import { MouseEventHandler } from "react";

export interface IRewardUIProps {
  onClickReservationDetail: MouseEventHandler<HTMLDivElement>;
  refetch: any;
  count: any;
  data: any;
}

export interface IFetchPayments {
  imp_uid: string;
  id: string;
  price: number;
  usepoint: number;
  reservation: {
    theme_menu: any;
    reservation_date: string;
  };
  user: {
    point: number;
  };
}
