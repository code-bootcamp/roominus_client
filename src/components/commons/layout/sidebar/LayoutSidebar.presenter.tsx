import Link from "next/link";
import * as S from "../sidebar/LayoutSidebar.styles";
import { Fragment } from "react";

const NAVIGATION_MENUS = [
  { name: "내 찜목록", page: "/mypage/mypick" },
  { name: "내 후기목록", page: "/mypage/mypick" },
  { name: "최근 예약 내역", page: "/mypage/history" },
  { name: "최근 적립 내역", page: "/mypage/reward" },
];

export default function LayoutSideBarUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.HeaderBox>
          <S.UserNameBox>
            <S.UserData onClick={props.onClickMyPage}>홍길동님</S.UserData>
          </S.UserNameBox>
          <p>안녕하세요!</p>
          <p>적립금 : 원</p>
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
            <Link href="/home">
              <span>로그아웃</span>
            </Link>
          </S.FooterBox>
        </S.MenuFooterBox>
      </S.Wrapper>
    </S.Container>
  );
}
