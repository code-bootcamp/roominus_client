// import { MouseEventHandler } from "react";

export interface IMyBoardUIProps {
  refetch: any;
  onClickBoard: any;
  boards: any;
  count: {
    fetchBoardsUserCount: number;
  };
}

export interface IFetchBoardsUserProps {
  view: number;
  id: string;
  title: string;
  like: number;
  createdAt: string;
}
