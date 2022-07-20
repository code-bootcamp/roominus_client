import { MouseEventHandler } from "react";

export interface IMyReviewUIProps {
  count: {
    fetchThemeReviewsUserCount: number;
  };

  data: any;
  onClickReview: MouseEventHandler<HTMLLIElement> | undefined;
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
