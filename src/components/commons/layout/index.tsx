import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { breakPoints } from "../../../commons/styles/media";

import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutTopHeader from "./topheader/LayoutTopHeader.container";
import LayoutBanner from "./banner/LayoutBanner";
import LayoutSideBar from "./sidebar/LayoutSidebar.container";
import LayoutSidebarAdmin from "./sidebarAdmin/LayoutSidebar.container";
import LayoutBottomNavigation from "./bottomNavigation";

const HIDDEN_HEADER = ["/"];
const HIDDEN_BANNER = ["/", "/home/", "/cafe/"];
const HIDDEN_TOP_HEADER = ["/"];
const HIDDEN_FOOTER = ["/"];

const MainWrapper = styled.main`
  max-width: 1200px;
  margin: auto;
`;

const Wrapper = styled.main`
  width: 100%;
  height: 100%;

  @media ${breakPoints.tablet} {
    padding: 0em 1em 0em 1em;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media ${breakPoints.mobile} {
    padding: 0em 0.5em 0em 0.5em;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 70%;
  padding: 0em 0.5em;
`;

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const [windowSize, setWindowSize] = useState(false);

  const isHiddenTopHeader = HIDDEN_TOP_HEADER.includes(router.asPath);
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isVISBLESIDEBAR = router.asPath.includes("/mypage");
  const isVISBLEADMINSIDEBAR = router.asPath.includes("/admin");

  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <MainWrapper>
      {!windowSize && (
        <Wrapper>
          {!isHiddenTopHeader && <LayoutTopHeader />}
          {!isHiddenHeader && <LayoutHeader />}
          {!isHiddenBanner && <LayoutBanner />}
          <div style={{ display: "flex" }}>
            {isVISBLESIDEBAR && <LayoutSideBar />}
            {isVISBLEADMINSIDEBAR && <LayoutSidebarAdmin />}
            <Body>{props.children}</Body>
          </div>
          {!isHiddenFooter && <LayoutFooter />}
        </Wrapper>
      )}

      {windowSize && (
        <Wrapper>
          {!isHiddenTopHeader && <LayoutTopHeader />}
          {!isHiddenHeader && <LayoutHeader />}
          {!isHiddenBanner && <LayoutBanner />}
          <div style={{ display: "flex" }}>
            {isVISBLESIDEBAR && <LayoutSideBar />}
            {isVISBLEADMINSIDEBAR && <LayoutSidebarAdmin />}
            <Body>{props.children}</Body>
          </div>
          {!isHiddenFooter && <LayoutFooter />}
          <LayoutBottomNavigation />
        </Wrapper>
      )}
    </MainWrapper>
  );
}
