import { MouseEventHandler } from "react";

export interface IHeaderUIProps {
  activedMenu: string;
  onClickMenu: any;

  onClickLogout: () => Promise<void>;
}

export interface INavigationUIProps {
  // onClickMenu: MouseEventHandler<HTMLLIElement>;
  onClickMenu: any;
  activedMenu: string;
}

export interface IIsActiveProps {
  isActive: boolean;
}

export interface ISideBarUIProps {
  userInfo: any;
  activedMenu: string;
  // onClickMenu: MouseEventHandler<HTMLLIElement>;
  onClickMenu: any;
  onClickMyPage: () => void;
  onClickLogout: () => Promise<void>;
}

export interface ISideBarAdminUIProps {
  activedMenu: string;
  onClickMenu: any;

  // onClickMenu: MouseEventHandler<HTMLLIElement>;
}

export interface ITopHeaderUIProps {
  onClickLogout: MouseEventHandler<HTMLSpanElement> | undefined;
}
