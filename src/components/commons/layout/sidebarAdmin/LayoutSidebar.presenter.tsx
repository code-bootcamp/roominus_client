import Link from "next/link";
import { Fragment } from "react";
import * as S from "./LayoutSidebar.styleds";

const NAVIGATION_MENUS = [
  { name: "매장리스트", page: "/admin/cafe" },
  { name: "매장등록", page: "/admin/cafe/new" },
  { name: "매장상세", page: "/admin/cafe/id" },
  // { name: "테마리스트", page: "/admin/theme/list" },
  { name: "테마등록", page: "/admin/theme/new" },
  { name: "테마상세", page: "/admin/theme/detail/title" },
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
