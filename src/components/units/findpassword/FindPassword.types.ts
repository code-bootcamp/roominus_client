import { RefObject } from "react";

export interface IFindPasswordUIProps {
  onClickShowContentsFirst: any;
  onClickShowContentsSecond: any;
  isClickedsecond: any;
  isClickedfirst: any;
  onSubmitVerificationEmail: any;
  PasswordFindinputRef: any;
  handleSubmit: any;
  setValue: any;
  formState: any;
}
export interface IFindPasswordProps {
  onClickShowContentsFirst: () => void;
  onClickShowContentsSecond: () => void;
  isClickedsecond: true;
  isClickedfirst: boolean;
  PasswordFindinputRef: RefObject<HTMLInputElement>;
}
