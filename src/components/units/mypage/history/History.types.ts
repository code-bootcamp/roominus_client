import { MouseEventHandler, ReactNode } from "react";

export interface IData {
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
