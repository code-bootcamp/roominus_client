import Link from "next/link";
import * as S from "../sidebar/LayoutSidebar.styles";
import { Fragment } from "react";
import { ISideBarUIProps } from "../Layout.types";

const NAVIGATION_MENUS = [
  { name: "내 찜 목록", page: "/mypage/mypick" },
  { name: "내 글 목록", page: "/mypage/myboard" },
  { name: "내 후기 목록", page: "/mypage/myreview" },
  { name: "최근 예약 내역", page: "/mypage/history" },
  { name: "최근 적립 내역", page: "/mypage/reward" },
];

export default function LayoutSideBarUI(props: ISideBarUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.HeaderBox>
          <S.UserNameBox>
            <S.UserData onClick={props.onClickMyPage}>
              {props.userInfo.name}
            </S.UserData>
          </S.UserNameBox>
          <p>안녕하세요!</p>
          <p>
            적립금 <S.UserPoint>{props.userInfo.point}</S.UserPoint>원
          </p>
          <S.line></S.line>
        </S.HeaderBox>
        <S.MenuBoxs>
          {NAVIGATION_MENUS.map((el) => (
            <Fragment key={el.page}>
              <S.MenuItem
                id={el.page}
                onClick={props.onClickMenu}
                isActive={props.activedMenu?.includes(el.page)}
              >
                {el.name}
              </S.MenuItem>
            </Fragment>
          ))}
        </S.MenuBoxs>

        <S.MenuFooterBox>
          <S.FooterBox>
            <S.Setting />
            <Link href="/mypage/phoneedit">
              <span>회원정보 수정</span>
            </Link>
          </S.FooterBox>

          <S.FooterBox>
            <S.Logout />
            <span onClick={props.onClickLogout}>로그아웃</span>
          </S.FooterBox>
        </S.MenuFooterBox>
      </S.Wrapper>
    </S.Container>
  );
}
