import Link from "next/link";
import * as S from "../sidebar/LayoutSidebar.styles";
import { Fragment } from "react";
import { ISideBarUIProps } from "../Layout.types";

const NAVIGATION_MENUS = [
  { name: "내가 찜한 테마", page: "/mypage/mypick" },
  { name: "내가 쓴 게시물", page: "/mypage/myboard" },
  { name: "내가 쓴 리뷰글", page: "/mypage/myreview" },
  { name: "최근 예약 내역", page: "/mypage/history" },
  { name: "최근 결제 내역", page: "/mypage/reward" },
];

export default function LayoutSideBarUI(props: ISideBarUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.HeaderBox>
          <S.UserNameBox>
            {props.userInfo?.name ? (
              <>
                <S.UserData onClick={props.onClickMyPage}>
                  <span>{props.userInfo?.name}</span>
                </S.UserData>
              </>
            ) : (
              <>
                <S.UserData onClick={props.onClickMyPage}>
                  <span>{props.userInfo?.email.split("@")[0]}</span>
                </S.UserData>
              </>
            )}
          </S.UserNameBox>
          <p>회원님</p>
          <p>안녕하세요!</p>
          <p>
            적립금{" "}
            <S.UserPoint>{props.userInfo?.point.toLocaleString()}</S.UserPoint>
            원
          </p>
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
            <S.Mail />
            <Link href="/customer/contactUs">
              <span>문의하기</span>
            </Link>
          </S.FooterBox>
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
