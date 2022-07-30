/* eslint-disable no-unused-vars */
import Link from "next/link";
import { Fragment, useState } from "react";
import * as S from "./LayoutHeader.styles";
import { slide as Menu } from "react-burger-menu";
import { IHeaderUIProps } from "../Layout.types";
import { accessTokenState } from "../../../../commons/store";
import { useRecoilState } from "recoil";

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
    background: "#7c6db5",
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
    padding: "2em 1.5em 0",
    fontSize: "1.2em",
  },

  bmItemList: {
    color: "#60046f",
    padding: "0.3em",
  },
  bmItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "#d1d1d1",
    marginBottom: "0.8em",
  },
  bmOverlay: {
    background: "rgba(116, 87, 151, 0.3)",
    position: "fixed", //SearchWrapper만 화면 끝까지 늘리기
    top: "0",
    left: "calc(-100vw + 100%)",
  },
};

export default function LayoutHeaderUI(props: IHeaderUIProps) {
  const [openMypageOp, setOpenMypageOp] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickOpenMypageOp = () => {
    setOpenMypageOp(true);
  };
  const onClickCloseMypageOp = () => {
    setOpenMypageOp(false);
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.LogoWrapper>
            <Link href={"/home"}>
              <S.Logo src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658995604/public/layout/new_logo_y9nz8m.png" />
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
          <Menu width={"70%"} right styles={styles} disableOverlayClick>
            <Link href={"/home"}>
              <S.MenuMainItem id="home" className="menu-item">
                메인
              </S.MenuMainItem>
            </Link>

            <S.LoginBox>
              {!accessToken && (
                <S.LandSBox>
                  {" "}
                  <Link href={"/login"}>
                    <S.LogInandSignBtn id="login" className="menu-item">
                      로그인
                    </S.LogInandSignBtn>
                  </Link>
                  <Link href={"/signup/choice"}>
                    <S.LogInandSignBtn id="signup" className="menu-item">
                      회원가입
                    </S.LogInandSignBtn>
                  </Link>
                </S.LandSBox>
              )}

              {accessToken && (
                <Link href={"/home"}>
                  <S.LogOutBtn
                    id="logout"
                    className="menu-item"
                    onClick={props.onClickLogout}
                  >
                    로그아웃
                  </S.LogOutBtn>
                </Link>
              )}
            </S.LoginBox>

            <S.MenuBox>
              <Link href={"/cafe"}>
                <S.MyMenues id="home" className="menu-item">
                  매장
                </S.MyMenues>
              </Link>
              <Link href={"/theme"}>
                <S.MyMenues id="home" className="menu-item">
                  테마
                </S.MyMenues>
              </Link>
              <Link href={"/reservation"}>
                <S.MyMenues id="reservation" className="menu-item">
                  예약
                </S.MyMenues>
              </Link>
              <Link href={"/community"}>
                <S.MyMenues id="community" className="menu-item">
                  커뮤니티
                </S.MyMenues>
              </Link>
              {!openMypageOp && (
                <S.MyMenues
                  id="mypage"
                  className="menu-item"
                  onClick={onClickOpenMypageOp}
                >
                  마이페이지 {">"}
                </S.MyMenues>
              )}
              {openMypageOp && (
                <S.MyMenues
                  id="mypage"
                  className="menu-item"
                  onClick={onClickCloseMypageOp}
                >
                  마이페이지
                </S.MyMenues>
              )}{" "}
              {openMypageOp && (
                <S.MyMenubox>
                  <Link href={"/mypage"}>
                    <S.MyMenues id="mypage" className="menu-item">
                      내 정보
                    </S.MyMenues>
                  </Link>
                  <Link href={"/mypage/mypick"}>
                    <S.MyMenues id="mypick" className="menu-item">
                      테마 찜목록
                    </S.MyMenues>
                  </Link>
                  <Link href={"/mypage/myreview"}>
                    <S.MyMenues id="myreview" className="menu-item">
                      내가 쓴 리뷰
                    </S.MyMenues>
                  </Link>
                  <Link href={"/mypage/myboard"}>
                    <S.MyMenues id="myboard" className="menu-item">
                      내가 쓴 게시물
                    </S.MyMenues>
                  </Link>
                  <Link href={"/mypage/history"}>
                    <S.MyMenues id="history" className="menu-item">
                      최근 예약 내역
                    </S.MyMenues>
                  </Link>
                  <Link href={"/mypage/reward"}>
                    <S.MyMenues id="reward" className="menu-item">
                      최근 예약 내역
                    </S.MyMenues>
                  </Link>
                  <Link href={"/mypage/phoneedit"}>
                    <S.MyMenues id="myinfoedit" className="menu-item">
                      회원정보 수정
                    </S.MyMenues>
                  </Link>
                </S.MyMenubox>
              )}
            </S.MenuBox>
          </Menu>
        </S.Hamburger>
      </S.Container>
    </>
  );
}
