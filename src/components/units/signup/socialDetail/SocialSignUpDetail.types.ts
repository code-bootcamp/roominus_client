import { Dispatch, MutableRefObject, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";

export interface ISocialSignUpDetailUIProps {
  googleInfo: {
    email: string;
  };
  kakaoInfo: {
    email: string;
  };
  handleSubmit: any;
  setValue: UseFormSetValue<FieldValues>;
  formState: FormState<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  onSubmitSignup: (data: any) => Promise<void>;
  onClickVerifyMySelfByNo: () => Promise<void>;
  showCount: string;
  verificationBtn: MutableRefObject<HTMLButtonElement>;
  onClickCheckVerificationNo: () => Promise<void>;
  timeRef: MutableRefObject<HTMLSpanElement>;
  setPhone: Dispatch<SetStateAction<string>>;
  onChangeTokenValue: (event: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  onClickMoveToLogin: () => void;
  setTokenInput: Dispatch<SetStateAction<string>>;
}
