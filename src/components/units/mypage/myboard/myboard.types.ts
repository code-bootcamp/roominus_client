// import { MouseEventHandler } from "react";

export interface IMyBoardUIProps {
  // onClickBoard: MouseEventHandler<HTMLLIElement> | undefined;
  onClickBoard: any;
  data: any;
  count: {
    fetchBoardsUserCount: number;
  };
}

export interface IFetchBoardsUserProps {
  id: string;
  title: string;
  like: number;
  createdAt: string;
}
