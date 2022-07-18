import { Dispatch, SetStateAction } from "react";

export interface IThemeCommentListUIProps {
  loadMore: (page: number) => void;
  data: any;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export interface IThemeCommentListUIItemProps {
  el: {
    id: string;
    star: number;
    user: {
      name?: string;
    };
    createdAt: string;
    clear: boolean;
    rank: string;
    content: string;
  };
}
