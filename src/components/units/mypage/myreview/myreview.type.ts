export interface IMyReviewUIProps {
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
