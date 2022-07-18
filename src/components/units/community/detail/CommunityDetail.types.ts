export interface ICommunityDetailProps {
  onClickList: () => void;
  onClickDelete: () => Promise<void>;
  data?: {
    fetchBoard: {
      createdAt: string;
      mainImg: string;
      title: string;
      content: string;
    };
  };
}
