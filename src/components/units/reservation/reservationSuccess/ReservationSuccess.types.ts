import { LegacyRef } from "react";

export interface IReservationSuccessUI {
  // eslint-disable-next-line no-undef
  cancellable: JSX.Element;
  data: any;
  onClickOpenRefundModal: any;
  link: string;
  printRef: LegacyRef<HTMLElement> | undefined;
}
