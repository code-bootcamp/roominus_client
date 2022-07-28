import { MouseEventHandler } from "react";

export interface IHomeUIProps {
  onClickMore: MouseEventHandler<HTMLSpanElement>;
  data: { fetchCafes: any[] };
  onClickCard: any;
  fetchThemes: { fetchThemes: any[] };
  value: any;
  setValue: any;
  isOpened1: boolean;
  isOpened2: boolean;
  isOpened3: boolean;
  onClickOpenQuestion1: () => void;
  onClickOpenQuestion2: () => void;
  onClickOpenQuestion3: () => void;
  onClickCloseQuestion1: () => void;
  onClickCloseQuestion2: () => void;
  onClickCloseQuestion3: () => void;
}

export interface IFetchBoards {
  like: number;
}
