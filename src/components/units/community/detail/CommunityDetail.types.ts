export interface IBoardTagsProps {
  id: string;
  title: string;
}

export interface ICommunityDetailProps {
  onClickList: () => void;
  onClickEdit: () => void;
  onClickDelete: () => Promise<void>;
  data?: {
    fetchBoard: {
      createdAt: string;
      mainImg: string;
      title: string;
      content: any;
      boardTags: [];
      user: {
        name: string;
      };
    };
  };
}
