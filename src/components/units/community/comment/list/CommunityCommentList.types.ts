export interface ICommunityCommentListUIProps {
  data?: {
    fetchBoardComments: any;
  };
  onClickDelete: (event: any) => Promise<void>;
  loadFunc: () => void;
}

export interface IBoardreviewEl {
  id: string;
  createdAt: string;
  content: string;
  user: {
    name: string;
  };
}
