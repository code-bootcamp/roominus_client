import { MouseEvent } from "react";

export interface IFetchBoardsProps {
  id: string;
  mainImg: string;
  title: string;
  like: string;
}

export interface ICommunityListProps {
  onClickCard: (
    el: IFetchBoardsProps
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  onClickWrite: () => void;
  data: any;
}
