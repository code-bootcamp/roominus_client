import { MouseEvent } from "react";

export interface IPaginations01Props {
  refetch: any;
  count: any;
}

export interface IPageinations01UIProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
