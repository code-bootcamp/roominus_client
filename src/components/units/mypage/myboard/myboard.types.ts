// import { MouseEventHandler } from "react";

export interface IMyBoardUIProps {
  refetch: any;
  // onClickBoard: MouseEventHandler<HTMLLIElement> | undefined;
  onClickBoard: any;
  data: any;
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
