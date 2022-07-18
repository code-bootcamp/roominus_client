import { Dispatch, SetStateAction } from "react";

export interface IThemeCommentListUIProps {
  loadMore: (page: number) => void;
  data: any;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export interface IThemeCommentListUIItemProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  el: {
    id: string;
    star: number;
    createdAt: string;
    clear: boolean;
    rank: string;
    content: string;
    theme?: {
      id: string;
      title: string;
      rank: number;
      intro_title: string;
      intro_content: string;
      agelimit: number;
      peoplelimit: number;
      clearTime: number;
    };
    user: {
      name: string;
    };
  };
}

export interface IFetchThemeReviewsData {
  id: string;
  star: number;
  createdAt: string;
  clear: boolean;
  rank: string;
  content: string;
  user: {
    id: string;
    name: string;
  };
}
