import { Dispatch, SetStateAction } from "react";
import { IBoardreviewEl } from "../list/CommunityCommentList.types";

export interface ICommunityCommentEdit {
  onClickDelete: (event: any) => Promise<void>;
  el: IBoardreviewEl;
}

export interface ICommunityCommentEditUIProps {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  onClickEdit: (event: any) => void;
  onClickDelete: (event: any) => Promise<void>;
  el: IBoardreviewEl;
  isAnswer: boolean;
  editId: string;
  setEditId: Dispatch<SetStateAction<string>>;
  onClickReComment: (event: any) => void;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  answerId: string;
}
