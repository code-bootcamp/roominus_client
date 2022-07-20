import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IDataProps {
  content: string;
}

export interface ICommunityCommentWriteUIProps {
  onClickComment: (data: any) => Promise<void>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  userInfo: {
    name: string;
  };
}
