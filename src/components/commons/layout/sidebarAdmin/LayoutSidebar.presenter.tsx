import Link from "next/link";
import { Fragment } from "react";
import * as S from "./LayoutSidebar.styleds";

const NAVIGATION_MENUS = [
  { name: "매장", page: "/admin/cafe" },
  { name: "테마", page: "/admin/theme/list" },
  { name: "예약", page: "/admin/reservation/list" },
];

export default function LayoutSideBarAdminUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.MenuBox>
          {NAVIGATION_MENUS.map((el) => (
            <Fragment key={el.page}>
              <Link href={el.page}>
                <S.MenuItem
                  id={el.page}
                  onClick={props.onClickMenu}
                  isActive={el.page === props.activedMenu}
                >
                  {el.name}
                </S.MenuItem>
              </Link>
            </Fragment>
          ))}
        </S.MenuBox>
      </S.Wrapper>
    </S.Container>
  );
}
