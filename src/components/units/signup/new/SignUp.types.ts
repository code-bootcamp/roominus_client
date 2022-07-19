import { RefObject } from "react";

export interface ISignUpUIProps {
  onClickMoveToLogin: () => void;
  onClickMoveToSignupDetail: () => void;
  onOpenErrorModal: () => void;
  onChangeBothCheckbox: () => void;
  onChangeNecessityCheck: () => void;
  onChangeOptionalCheck: () => void;
  totalCheckRef: RefObject<HTMLInputElement>;
  necessityCheckRef: RefObject<HTMLInputElement>;
  optionalCheckRef: RefObject<HTMLInputElement>;
  necessity: boolean;
  optional: boolean;
  onClickTotalCheck: () => void;
}
