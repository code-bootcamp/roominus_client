import Link from "next/link";
import * as S from "./LayoutSidebar.styleds";
import { FiSettings, FiLogOut } from "react-icons/Fi";
import { Fragment } from "react";

const NAVIGATION_MENUS = [
  { name: "내 찜목록", page: "/mypage/mypick" },
  { name: "최근 예약 내역", page: "/mypage/history" },
  { name: "최근 적립 내역", page: "/mypage/reward" },
];

export default function LayoutSideBarUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <div>
          <S.UserNameBox>
            <S.UserData onClick={props.onClickMyPage}>홍길동님</S.UserData>

            <span>안녕하세요!</span>
          </S.UserNameBox>
          <S.line></S.line>
        </div>
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
            {" "}
            <FiSettings style={{ marginTop: "0.2em" }} />
            <Link href="/mypage/phoneedit">
              <span>회원정보 수정</span>
            </Link>
          </S.FooterBox>

          <S.FooterBox>
            <FiLogOut style={{ marginTop: "0.2em" }} />
            <Link href="/mypage/pwedit">
              <span>로그아웃</span>
            </Link>
          </S.FooterBox>
        </S.MenuFooterBox>
      </S.Wrapper>
    </S.Container>
  );
}
