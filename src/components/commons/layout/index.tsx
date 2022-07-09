import { ReactNode } from "react";
import { useRouter } from "next/router";
import { breakPoints } from "../../../commons/styles/media";

import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutTopHeader from "./topheader/LayoutTopHeader.container";
import LayoutBanner from "./banner/LayoutBanner";
import LayoutSideBar from "./sidebar/LayoutSidebar.presenter";

const HIDDEN_HEADER = ["/"];
const HIDDEN_BANNER = ["/", "/home", "/cafe", "/login", "/signup"];
const HIDDEN_TOP_HEADER = ["/"];
const VISIBLE_SIDE_BAR = [
  "/mypage",
  "/mypage/history",
  "/mypage/reward",
  "/mypage/mypick",
  "/mypage/pwedit",
];
const HIDDEN_FOOTER = ["/"];

const Wrapper = styled.section`
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
  padding: 0px 20px;

  @media ${breakPoints.tablet} {
    padding: 0px 20px;
  }

  @media ${breakPoints.mobile} {
    padding: 0px 20px;
  }
`;

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenTopHeader = HIDDEN_TOP_HEADER.includes(router.asPath);
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isVISBLESIDEBAR = VISIBLE_SIDE_BAR.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenTopHeader && <LayoutTopHeader />}
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenBanner && <LayoutBanner />}
      <div style={{ display: "flex" }}>
        {isVISBLESIDEBAR && <LayoutSideBar />}
        <Body>{props.children}</Body>
      </div>
      {!isHiddenFooter && <LayoutFooter />}
    </Wrapper>
  );
}
