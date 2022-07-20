import { LegacyRef } from "react";

export interface IReservationSuccessUI {
  cancellable: boolean;
  data: any;
  onClickOpenRefundModal: any;
  link: string;
  printRef: LegacyRef<HTMLElement> | undefined;
}
