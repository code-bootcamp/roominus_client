import { MouseEventHandler } from "react";

export interface IHeaderUIProps {
  activedMenu: string;
  onClickMenu: any;
  onClickLogout: () => Promise<void>;
}

export interface INavigationUIProps {
  onClickMenu: any;
  activedMenu: string;
}

export interface IIsActiveProps {
  isActive: boolean;
}

export interface ISideBarUIProps {
  userInfo: any;
  activedMenu: string;
  onClickMenu: any;
  onClickMyPage: () => void;
  onClickLogout: () => Promise<void>;
}

export interface ISideBarAdminUIProps {
  activedMenu: string;
  onClickMenu: any;
}

export interface ITopHeaderUIProps {
  onClickLogout: MouseEventHandler<HTMLSpanElement> | undefined;
}
