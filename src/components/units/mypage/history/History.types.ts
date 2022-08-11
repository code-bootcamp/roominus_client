import { MouseEventHandler, ReactNode } from "react";

export interface IData {
  theme_menu: any;
  people_number: ReactNode;
  reservation_date: ReactNode;
  id: string;
  status: string;
  reservation_time: string;
}

export interface IHistoryUIProps {
  onClickReservationDetail: MouseEventHandler<HTMLDivElement>;
  refetch: any;
  count: any;
  reservation: any;
}
