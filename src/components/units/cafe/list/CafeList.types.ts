import { MouseEvent } from "react";

export interface IFetchCafesProps {
  address: string;
  id: string;
  mainImg: string;
  name: string;
  phone: string;
}

export interface ICafeListUIProps {
  onClickTotal: () => void;
  onClickGangnam: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickHongdae: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickKondae: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCard: (
    el: IFetchCafesProps
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  data: any;
  total: boolean;
  gangnam: boolean;
  hongdae: boolean;
  kondae: boolean;
  loadFunc: () => void;
  count: any;
  onChangeLocation: (event: any) => void;
}
