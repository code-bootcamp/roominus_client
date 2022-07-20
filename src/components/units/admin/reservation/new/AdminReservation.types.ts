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
  onClickSubmit: any;
  // onClickSubmit: (data: IData) => Promise<void>;

  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
}
