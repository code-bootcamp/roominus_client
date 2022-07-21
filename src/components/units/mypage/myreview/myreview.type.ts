export interface IMyReviewUIProps {
  onClickReview: any;
  count: {
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
