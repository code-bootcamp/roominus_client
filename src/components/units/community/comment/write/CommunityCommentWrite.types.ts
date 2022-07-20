import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IDataProps {
  content: string;
}

export interface ICommunityCommentWriteUIProps {
  isEdit: boolean;
  onClickComment: (data: any) => Promise<void>;
  onClickEditComment: (data: any) => Promise<void>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  userInfo: {
    name: string;
  };
  defaultValue: any;
  onClickCancel: () => void;
}
