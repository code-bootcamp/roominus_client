import Link from "next/link";
import { Fragment } from "react";
import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

const NAVIGATION_MENUS = [
  { name: "매장", page: "/store" },
  { name: "테마", page: "/thema" },
  { name: "예약", page: "/reservation" },
  { name: "커뮤니티", page: "/community" },
];
export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.LogoWrapper>
            <Link href={"/"}>
              <S.Logo src="/Layout/logo.png" />
            </Link>
          </S.LogoWrapper>
          <S.LoginJoinMenuWrapper>
            <S.LoginJoinWrapper>
              <S.Contents onClick={props.onClickMoveToLogin}>로그인</S.Contents>
              <S.Contents>|</S.Contents>
              <S.Contents onClick={props.onClickMoveToJoin}>
                회원가입
              </S.Contents>
            </S.LoginJoinWrapper>
            <S.MenuWrapper>
              {NAVIGATION_MENUS.map((el) => (
                <Fragment key={el.page}>
                  <Link href={el.page}>
                    <S.MenuItem
                      id={el.page}
                      onClick={props.onClickMenu}
                      isActive={el.page === props.activedMenu}
                    >
                      <a>{el.name}</a>
                    </S.MenuItem>
                  </Link>
                </Fragment>
              ))}
            </S.MenuWrapper>
          </S.LoginJoinMenuWrapper>
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
            <S.ToggleMenu>로그인</S.ToggleMenu>
            <S.ToggleMenu>회원가입</S.ToggleMenu>
            {NAVIGATION_MENUS.map((el) => (
              <Fragment key={el.page}>
                <Link href={el.page}>
                  <S.ToggleMenu id={el.page} onClick={props.onClickMenu}>
                    <a>{el.name}</a>
                  </S.ToggleMenu>
                </Link>
              </Fragment>
            ))}
            <S.ToggleMenu>마이페이지</S.ToggleMenu>
          </S.ToggleMenuWrapper>
        </S.Toggle>
      ) : (
        <></>
      )}
    </>
  );
}
