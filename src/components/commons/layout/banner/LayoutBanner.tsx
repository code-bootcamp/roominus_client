import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { breakPoints } from "../../../../commons/styles/media";

const BannerImage = styled.div`
  width: 100vw;
  height: 14.38em;
  position: relative;
  left: calc(-50vw + 50%);
  background: url("https://res.cloudinary.com/dop5piuwp/image/upload/v1658990937/public/layout/banner_lfnk3f.webp")
    center/cover;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakPoints.tablet} {
    height: 10em;
  }

  @media ${breakPoints.mobile} {
    height: 6em;
  }
`;

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Line = styled.div`
  width: 24px;
  border-bottom: 1px solid white;
  margin-bottom: 10px;
`;
const EngMenu = styled.div`
  font-size: 1.8em;
  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

const KorMenu = styled.div`
  font-size: 3.2em;
  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    font-size: 1.3em;
  }
`;

export default function LayoutBanner() {
  const router = useRouter();
  const [activedMenu, setActivedMenu] = useState("");
  const NAVIGATION_MENUS = [
    { kor: "매장", eng: "Cafe", page: "/cafe" },
    { kor: "테마", eng: "Theme", page: "/theme" },
    { kor: "예약", eng: "Reservation", page: "/reservation" },
    { kor: "커뮤니티", eng: "Community", page: "/community" },
    { kor: "마이페이지", eng: "Mypage", page: "/mypage" },
    { kor: "고객지원", eng: "Customer", page: "/customer" },
    { kor: "로그인", eng: "Login", page: "/login" },
    { kor: "회원가입", eng: "SignUp", page: "/signup" },
    { kor: "관리자", eng: "Admin", page: "/admin" },
  ];

  useEffect(() => {
    if (!router.asPath.includes(activedMenu) || activedMenu === "") {
      setActivedMenu(router.asPath);
    }
  }, [router.asPath]);
  return (
    <>
      <BannerImage>
        <Wrapper>
          <Line />
          <EngMenu>
            {NAVIGATION_MENUS.map((el) => {
              if (activedMenu.includes(el.page)) return el.eng;
              else return "";
            })}
          </EngMenu>
          <KorMenu>
            {NAVIGATION_MENUS.map((el) => {
              if (activedMenu.includes(el.page)) return el.kor;
              else return "";
            })}
          </KorMenu>
        </Wrapper>
      </BannerImage>
    </>
  );
}
