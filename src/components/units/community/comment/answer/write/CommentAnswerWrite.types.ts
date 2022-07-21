import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IDataProps {
  content: string;
}

export interface ICommentAnswerWriteUIProps {
  userInfo: {
    name: string;
  };
  onClickCancel: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickReComment: (data: any) => Promise<void>;
  onClickReCommentUpdate: (data: any) => Promise<void>;
  isAnswerEdit: any;
  answerData: {
    content: string;
  };
  isAnswer: any;
}

export interface ICommentAnswerWriteProps {
  isAnswer: any;
  answerData: any;
  isAnswerEdit: any;
  answerId: string;
  setIsAnswer: any;
  answerEditId: string;
  refetch: any;
  setIsAnswerEdit: any;
}
