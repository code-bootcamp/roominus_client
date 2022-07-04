import { ReactNode } from "react";
// import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";

// const HIDDEN_HEADER = ["/"];
// const HIDDEN_FOOTER = ["/"];

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  // const router = useRouter();

  // const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  // const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      {/* {!isHiddenHeader && <LayoutHeader />} */}
      <LayoutHeader />
      <Body>{props.children}</Body>
      <LayoutFooter />
      {/* {!isHiddenFooter && <LayoutFooter />} */}
    </>
  );
}
