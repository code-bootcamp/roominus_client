import { ReactNode } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import { breakPoints } from "../../../commons/styles/media";

// const HIDDEN_HEADER = ["/"];
const HIDDEN_FOOTER = ["/"];

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  /* padding : 0em 10em 0em 10em; */
  // %로 주니까 창 줄어들때 양 옆 빈 공간 좁아짐
  padding: 0px 10% 0px 10%;

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
  padding: 0 2em 0 2em;
  // 바디 상하 패딩적용하니까 메인 무너짐
  border: 1px solid gainsboro;

  @media ${breakPoints.tablet} {
    padding: 0em 0em 0em 0em;
  }

  @media ${breakPoints.mobile} {
    padding: 0em 0.5em 0em 0.5em;
  }
`;

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  // const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <Wrapper>
      {/* {!isHiddenHeader && <LayoutHeader />} */}
      <LayoutHeader />
      <Body>{props.children}</Body>
      {!isHiddenFooter && <LayoutFooter />}
    </Wrapper>
  );
}
