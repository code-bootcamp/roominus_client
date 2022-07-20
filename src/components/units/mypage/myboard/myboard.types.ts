import { MouseEventHandler } from "react";

export interface IMyBoardUIProps {
  onClickBoard: MouseEventHandler<HTMLLIElement> | undefined;
  data: any;
}

export interface IFetchBoardsUserProps {
  id: string;
  title: string;
  like: number;
  createdAt: string;
}
