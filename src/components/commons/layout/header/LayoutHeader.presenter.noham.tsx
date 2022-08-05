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

export default function LayoutHeaderNohamUI(props: IHeaderUIProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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
          <Link href={"/mypage"}>
            <S.Mypage fontSize="large" />
          </Link>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
