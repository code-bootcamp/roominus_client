export interface IMyReviewUIProps {
  refetch: any;
  onClickReview: any;
  count: {
    fetchBoardsUserCount: any;
    fetchThemeReviewsUserCount: number;
  };

  data: any;
}

export interface IFetchThemesUser {
  theme: {
    title: string;
    id: string;
  };
  clear: boolean;
  star: number;
  content: string;
  createdAt: string;
}
