import { Modal } from "antd";
import Link from "next/link";
import { Fragment } from "react";
import PhoneNumberEdit from "../../../units/mypage/phonenumberedit";
import * as S from "./LayoutSidebar.styleds";

const NAVIGATION_MENUS = [
  { name: "테마 찜목록", page: "/mypage/mypick" },
  { name: "최근 결제내역", page: "/mypage/history" },
  { name: "최근 적립내역", page: "/mypage/reward" },
  { name: "비밀번호 변경", page: "/mypage/pwedit" },
];

export default function LayoutSideBarUI(props) {
  return (
    <S.Container>
      <S.UserInfoBox>
        <S.Label>
          <S.UserData>홍길동님</S.UserData>
        </S.Label>
        <S.Label>
          오늘까지 탈출
          <S.UserData>3회</S.UserData>
        </S.Label>
        <S.Label>
          오늘까지 모은 적립금 <S.UserData>5000원</S.UserData>
        </S.Label>
        <S.UserData>abcd1234@naver.com</S.UserData>
        <S.PhoneBox onClick={props.onClickReset}>
          <S.UserData>010-1234-5678</S.UserData>
          <S.resetButton />
        </S.PhoneBox>

        <S.MenuBox>
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
          <S.LogoutBox>
            <S.LogoutIcon />
            <S.Logout>로그아웃</S.Logout>
          </S.LogoutBox>
        </S.MenuBox>
      </S.UserInfoBox>

      <Modal
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        width={800}
      >
        <PhoneNumberEdit />
      </Modal>
    </S.Container>
  );
}
