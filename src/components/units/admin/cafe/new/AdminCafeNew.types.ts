import { RefObject } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IAdminCafeNewProps {
  isEdit: boolean;
  editData?: {
    fetchCafe: {
      name: string;
      phone: string;
      intro_content: string;
      address: string;
      address_detail: string;
      mainImg: string;
    };
  };
}

export interface IAdminCafeNewUIProps {
  register: UseFormRegister<FieldValues>;
  imgurl: string;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickButton: (data: any) => Promise<void>;
  onClickUpdate: (data: any) => Promise<void>;
  onChangeFile: (event: any) => Promise<void>;
  onClickRealInput: () => void;
  isEdit: boolean;
  editData?: {
    fetchCafe: {
      name: string;
      phone: string;
      intro_content: string;
      address: string;
      address_detail: string;
      mainImg: string;
    };
  };
  imgRef: RefObject<HTMLInputElement>;
}

export interface IDataProps {
  name: string;
  phone: string;
  intro_content: string;
  address: string;
  address_detail: string;
}

export interface IUpdateDataProps {
  name: string;
  phone: string;
  intro_content: string;
  address: string;
  address_detail: string;
}

export interface IUpdateCafeInput {
  name?: string;
  phone?: string;
  intro_content?: string;
  address?: string;
  address_detail?: string;
  mainImg?: string;
}
