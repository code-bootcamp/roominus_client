import { MouseEventHandler } from "react";

export interface ISignupChoiceUIProps {
  onClickMoveToOwner: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickMoveToSignUp: () => void;
  onClickGoogleLogin: () => void;
  onClickLoginKakao: () => void;
}
