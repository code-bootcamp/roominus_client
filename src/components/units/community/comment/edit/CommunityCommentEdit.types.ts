import { IBoardreviewEl } from "../list/CommunityCommentList.types";

export interface ICommunityCommentEdit {
  onClickDelete: (event: any) => Promise<void>;
  el: IBoardreviewEl;
}

export interface ICommunityCommentEditUIProps {
  isEdit: boolean;
  onClickEdit: () => void;
  onClickDelete: (event: any) => Promise<void>;
  el: IBoardreviewEl;
  isAnswer: boolean;
}
