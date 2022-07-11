import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import * as S from "./LayoutHeader.styles";
import { slide as Menu } from "react-burger-menu";

const NAVIGATION_MENUS = [
  { name: "매장", page: "/cafe" },
  { name: "테마", page: "/theme" },
  { name: "예약", page: "/reservation" },
  { name: "커뮤니티", page: "/community" },
  { name: "마이페이지", page: "/mypage" },
];
const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "1.5em",
    height: "1.5em",
    right: "2.5em",
    top: "1.4em",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    right: "0px",
    top: "0px",
    height: "100%",
  },
  bmMenu: {
    background: "#6c5281",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },

  bmItemList: {
    color: "#60046f",
    padding: "0.8em",
  },
  bmItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#d1d1d1",
    marginBottom: "1em",
  },
  bmOverlay: {
    background: "rgba(116, 87, 151, 0.3)",
    position: "fixed", //SearchWrapper만 화면 끝까지 늘리기
    top: "0",
    left: "calc(-100vw + 100%)",
  },
};

export default function LayoutHeaderUI(props: any) {
  const [open, setOpen] = useState(false);

  // const showSettings = (event) => {
  //   event.preventDefault();
  // };
  // const scrollPrevent = (event) => {
  //   if (open) {
  //     event.preventDefault();
  //   }
  // };
  // const handleOnOpen = () => {
  //   setOpen((prev) => !prev);
  // };
  // const handleOnClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.LogoWrapper>
            <Link href={"/home"}>
              <S.Logo src="/img/layout/logo.png" />
            </Link>
          </S.LogoWrapper>

          <S.MenuWrapper>
            {NAVIGATION_MENUS.map((el) => (
              <Fragment key={el.page}>
                <Link href={el.page}>
                  <S.MenuItem
                    id={el.page}
                    onClick={props.onClickMenu}
                    isActive={props.activedMenu.includes(el.page)}
                  >
                    {el.name}
                  </S.MenuItem>
                </Link>
              </Fragment>
            ))}
          </S.MenuWrapper>
        </S.Wrapper>
        <S.Hamburger>
          <Menu width={"40%"} right styles={styles} disableOverlayClick>
            <a id="home" className="menu-item" href="/cafe">
              매장
            </a>
            <a id="about" className="menu-item" href="/theme">
              테마
            </a>
            <a id="contact" className="menu-item" href="/reservation">
              예약
            </a>
            <a className="menu-item" href="/community">
              커뮤니티
            </a>
            <a id="contact" className="menu-item" href="/mypage">
              마이페이지
            </a>
          </Menu>
        </S.Hamburger>
      </S.Container>
    </>
  );
}
