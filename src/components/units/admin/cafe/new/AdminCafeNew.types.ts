import { RefObject } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IAdminCafeNewUIProps {
  register: UseFormRegister<FieldValues>;
  imgurl: string;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickButton: (data: any) => Promise<void>;
  onClickUpdate: (data: any) => Promise<void>;
  onChangeFile: (event: any) => Promise<void>;
  onClickRealInput: () => void;
  isEdit: any;
  editData: any;
  imgRef: RefObject<HTMLInputElement>;
}
