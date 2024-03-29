import {
  Dispatch,
  LegacyRef,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
} from "react";
import { FieldValues, FormState, UseFormHandleSubmit } from "react-hook-form";

export interface IMyPhoneEditUIProps {
  setTokenInput: Dispatch<SetStateAction<string>>;
  onClickPhonNumberEdit: any;
  onClickCheckVerificationNo: MouseEventHandler<HTMLButtonElement> | undefined;
  verificationBtn: LegacyRef<HTMLButtonElement> | undefined;
  showCount: ReactNode;
  timeRef: LegacyRef<HTMLSpanElement> | undefined;
  onClickVerifyMySelfByNo: MouseEventHandler<HTMLButtonElement> | undefined;
  setPhone: Dispatch<SetStateAction<string>>;
  // eslint-disable-next-line no-undef
  isEdit: boolean;
  onClickMoveToDelete: MouseEventHandler<HTMLSpanElement> | undefined;
  onClickEdit: MouseEventHandler<HTMLSpanElement> | undefined;

  userInfo: {
    name: string;
    email: string;
    phone: string;
  };

  setValue: Function;
  trigger: Function;
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}
