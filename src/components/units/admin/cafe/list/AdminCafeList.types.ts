import { MouseEvent } from "react";

export interface IFetchCafesProps {
  address: string;
  id: string;
  mainImg: string;
  name: string;
  phone: string;
}

export interface IAdminCafeListUIProps {
  onClickNew: () => void;
  onClickCard: (
    el: IFetchCafesProps
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  data: any;
  loadFunc: () => void;
}
