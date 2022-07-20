import { FieldValues, FormState, UseFormHandleSubmit } from "react-hook-form";

export interface IData {
  email: string;
}

export interface IDeleteMemberUIProps {
  setValue: Function;
  trigger: Function;
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;

  onSubmitDeleteMember: (data: any) => Promise<void>;
}
