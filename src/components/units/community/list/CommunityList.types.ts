import { MouseEvent } from "react";

export interface IFetchBoardsProps {
  id: string;
  mainImg: string;
  title: string;
  like: string;
  user: {
    name: string;
  };
}

export interface ICommunityListProps {
  refetch: any;
  count: any;
  onClickCard: (
    el: IFetchBoardsProps
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  onClickWrite: () => void;
  data: any;
}
