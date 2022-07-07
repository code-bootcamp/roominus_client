import { ReactNode } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import { breakPoints } from "../../../commons/styles/media";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

// const HIDDEN_HEADER = ["/"];
const VISIBLE_NAV = [
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

  // const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isVisibleNav = VISIBLE_NAV.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <Wrapper>
      {/* {!isHiddenHeader && <LayoutHeader />} */}
      <LayoutHeader />
      {isVisibleNav && <LayoutNavigation />}
      <Body>{props.children}</Body>
      {!isHiddenFooter && <LayoutFooter />}
    </Wrapper>
  );
}
