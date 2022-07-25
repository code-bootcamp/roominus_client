export interface IThemeCommentListUIProps {
  loadMore: () => void;
  data: any;
}

export interface IThemeCommentListUIItemProps {
  el: {
    id: string;
    star: number;
    createdAt: string;
    clear: boolean;
    rank: string;
    content: string;
    user: {
      name?: string;
      id?: string;
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
