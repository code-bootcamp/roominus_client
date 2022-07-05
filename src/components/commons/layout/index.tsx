import { ReactNode } from "react";
// import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import { breakPoints } from "../../../commons/styles/media";

// const HIDDEN_HEADER = ["/"];
// const HIDDEN_FOOTER = ["/"];
const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  @media ${breakPoints.mobile} {
    padding: 0em 0em 0em 0em;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 70%;
  padding: 0em 5em 0em 5em;

  @media ${breakPoints.mobile} {
    padding: 0.5em;
  }
`;
interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  // const router = useRouter();

  // const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  // const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <Wrapper>
      {/* {!isHiddenHeader && <LayoutHeader />} */}
      <LayoutHeader />
      <Body>{props.children}</Body>
      <LayoutFooter />
      {/* {!isHiddenFooter && <LayoutFooter />} */}
    </Wrapper>
  );
}
