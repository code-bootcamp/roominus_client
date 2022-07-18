import styled from "@emotion/styled";
import { LogoutOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 10%;
  border-right: 1px solid darkgray;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Wrapper = styled.section``;

export const MenuBox = styled.div`
  padding-top: 10em;
`;

export const MenuItem = styled.li`
  font-weight: ${(props) => (props.isActive ? "700" : "400")};
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};

  font-size: 1.3em;
  padding-bottom: 0.5em;
`;
