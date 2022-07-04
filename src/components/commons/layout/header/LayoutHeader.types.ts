import { MouseEvent } from "react";

export interface ILayoutHeaderUIProps {
  onClickMenu: (event: MouseEvent<HTMLUListElement>) => void;
  onClickMoveToJoin: () => void;
  onClickMoveToLogin: () => void;
}
