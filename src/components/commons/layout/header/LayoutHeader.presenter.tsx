import Link from "next/link";
import { Fragment } from "react";
import * as S from "./LayoutHeader.styles";

const NAVIGATION_MENUS = [
  { name: "매장", page: "/cafe" },
  { name: "테마", page: "/theme" },
  { name: "예약", page: "/reservation" },
  { name: "커뮤니티", page: "/community" },
  { name: "마이페이지", page: "/mypage" },
];
export default function LayoutHeaderUI(props: any) {
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
                    isActive={el.page === props.activedMenu}
                  >
                    {el.name}
                  </S.MenuItem>
                </Link>
              </Fragment>
            ))}
          </S.MenuWrapper>

          {props.isToggled ? (
            <S.Close onClick={props.onClickToggled} />
          ) : (
            <S.Menu onClick={props.onClickToggled} />
          )}
        </S.Wrapper>
      </S.Container>
      {props.isToggled ? (
        <S.Toggle>
          <S.ToggleMenuWrapper>
            <Link href={"/login"}>
              <S.ToggleMenu>로그인</S.ToggleMenu>
            </Link>
            <Link href={"/signup"}>
              <S.ToggleMenu>회원가입</S.ToggleMenu>
            </Link>

            {NAVIGATION_MENUS.map((el) => (
              <Fragment key={el.page}>
                <Link href={el.page}>
                  <S.ToggleMenu id={el.page} onClick={props.onClickMenu}>
                    <a>{el.name}</a>
                  </S.ToggleMenu>
                </Link>
              </Fragment>
            ))}
          </S.ToggleMenuWrapper>
        </S.Toggle>
      ) : (
        <></>
      )}
    </>
  );
}
