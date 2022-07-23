import { MouseEventHandler, ReactNode } from "react";

export interface IData {
  theme_menu: any;
  people_number: ReactNode;
  reservation_date: ReactNode;
  id: string;
  status: string;
}

export interface IHistoryUIProps {
  onClickReservationDetail: MouseEventHandler<HTMLDivElement>;
  refetch: any;
  count: any;
  data: any;
}
