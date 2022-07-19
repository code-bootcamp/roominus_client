import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface Idata {
  reservation_time: string;
  people_number: number;
  price: number;
  cafeName: string;
  themeTitle: string;
}

export interface IThemeMenuCreateUIProps {
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmitCreateThemeMenu: (data: Idata) => Promise<void>;
  cafeName: any;
  themeTitle: any;
}
export interface IThemeMenuCreateProps {
  infodata: any;
}
