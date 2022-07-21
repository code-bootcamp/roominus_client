import { Dispatch, SetStateAction } from "react";

export interface ICommentAnswerEditUIProps {
  answerEditId: string;
  el: {
    user?: {
      name: string;
    };
    createdAt: string;
    id: string;
    content: string;
  };
  answerData: string;
  isAnswerEdit: boolean;
  refetch: any;
  setIsAnswerEdit: Dispatch<SetStateAction<boolean>>;
  setAnswerEditId: Dispatch<SetStateAction<string>>;
  onClickDelete: () => void;
  onClickEdit: (event: any) => void;
}

export interface ICommentAnswerEditProps {
  refetch: any;
  el: any;
  answerData: string;
  onClickDelete: () => void;
}
