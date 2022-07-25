import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IData {
  people: string;
  time: string;
  price: number;
  cafeName: string;
  id: string;
  date: string;
}

export interface IAdminReservationNewUIProps {
  themesList: any;
  onClickSubmit: any;

  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
}
