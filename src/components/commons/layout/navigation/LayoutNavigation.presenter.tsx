import { Fragment } from "react";
import { INavigationUIProps } from "../Layout.types";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";

const NAVIGATION_MENUS = [
  { name: "내 예약 내역 확인", page: "/mypage/history" },
  { name: "내 적립금 확인", page: "/mypage/reward" },
  { name: "내가 찜한 테마", page: "/mypage/mypick" },
  { name: "비밀번호 변경", page: "/mypage/pwedit" },
];

export default function LayoutNavigationUI(props: INavigationUIProps) {
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem
            id={el.page}
            onClick={props.onClickMenu}
            isActive={el.page === props.activedMenu}
          >
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
