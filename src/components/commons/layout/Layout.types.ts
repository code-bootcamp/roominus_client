import { MouseEventHandler } from "react";

export interface IHeaderUIProps {
  activedMenu: string;
  isToggled: boolean;
  onClickMenu: MouseEventHandler<HTMLLIElement>;
  onClickToggled: () => void;
}

export interface INavigationUIProps {
  onClickMenu: MouseEventHandler<HTMLLIElement>;
  activedMenu: string;
}

export interface IIsActiveProps {
  isActive: boolean;
}

export interface ISideBarUIProps {
  activedMenu: string;
  onClickMenu: MouseEventHandler<HTMLLIElement>;
  onClickMyPage: () => void;
  onClickLogout: () => Promise<void>;
}

export interface ISideBarAdminUIProps {
  activedMenu: string;
  onClickMenu: MouseEventHandler<HTMLLIElement>;
}

export interface ITopHeaderUIProps {}
