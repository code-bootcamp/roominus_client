import Link from "next/link";
import { Fragment, useState } from "react";
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
    width: "1.3em",
    height: "1.3em",
    right: "1em",
    top: "1.5em",
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
    fontSize: "1.4em",
  },

  bmItemList: {
    color: "#60046f",
    padding: "0.8em",
  },
  bmItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
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
  const [openMypageOp, setOpenMypageOp] = useState(false);

  const onClickOpenMypageOp = () => {
    setOpenMypageOp(true);
  };
  const onClickCloseMypageOp = () => {
    setOpenMypageOp(false);
  };
  // const showSettings = (event) => {
  //   event.preventDefault();
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
                <S.MenuItem
                  id={el.page}
                  onClick={props.onClickMenu}
                  isActive={props.activedMenu.includes(el.page)}
                >
                  {el.name}
                </S.MenuItem>
              </Fragment>
            ))}
          </S.MenuWrapper>
        </S.Wrapper>
        <S.Hamburger>
          <Menu width={"80%"} right styles={styles} disableOverlayClick>
            <S.MenuMainItem id="home" className="menu-item" href="/home">
              메인
            </S.MenuMainItem>

            <a id="home" className="menu-item" href="/cafe">
              매장
            </a>
            <a id="theme" className="menu-item" href="/theme">
              테마
            </a>
            <a id="reservation" className="menu-item" href="/reservation">
              예약
            </a>
            <a id="community" className="menu-item" href="/community">
              커뮤니티
            </a>
            {!openMypageOp && (
              <a
                id="mypage"
                className="menu-item"
                onClick={onClickOpenMypageOp}
              >
                마이페이지 ▶️
              </a>
            )}
            {openMypageOp && (
              <a
                id="mypage"
                className="menu-item"
                onClick={onClickCloseMypageOp}
              >
                마이페이지 ◀️
              </a>
            )}

            {openMypageOp && (
              <S.MyMenubox>
                <S.MyMenues id="mypage" className="menu-item" href="/mypage">
                  내 정보
                </S.MyMenues>
                <S.MyMenues
                  id="mypick"
                  className="menu-item"
                  href="/mypage/mypick"
                >
                  테마 찜목록
                </S.MyMenues>
                <S.MyMenues
                  id="history"
                  className="menu-item"
                  href="/mypage/history"
                >
                  최근 예약내역
                </S.MyMenues>
                <S.MyMenues
                  id="reward"
                  className="menu-item"
                  href="/mypage/reward"
                >
                  최근 적립내역
                </S.MyMenues>
                <S.MyMenues
                  id="myinfoedit"
                  className="menu-item"
                  href="/mypage/phoneedit"
                >
                  회원정보 수정
                </S.MyMenues>
              </S.MyMenubox>
            )}
            <a id="contact" className="menu-item" href="/mypage">
              로그아웃
            </a>
          </Menu>
        </S.Hamburger>
      </S.Container>
    </>
  );
}
