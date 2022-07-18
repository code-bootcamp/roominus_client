import { LegacyRef } from "react";

export interface IReservationSuccessUI {
  data: any;
  onClickOpenRefundModal: any;
  link: string;
  printRef: LegacyRef<HTMLElement> | undefined;
}
