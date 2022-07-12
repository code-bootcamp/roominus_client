import styled from "@emotion/styled";
import { LogoutOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;
  height: 100vh;

  border-right: 1px solid darkgray;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserNameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  background-color: #7c21e1;
  margin-top: 3em;
  color: white;
`;

export const UserData = styled.span`
  font-size: 1.5em;
  cursor: pointer;
`;

export const MenuBox = styled.div`
  padding-top: 10em;
`;

export const MenuItem = styled.li`
  font-weight: ${(props) => (props.isActive ? "700" : "400")};
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};

  font-size: 1.3em;
  padding-bottom: 0.5em;
`;

export const LogoutBox = styled.div`
  font-size: 1.3em;
  cursor: pointer;
`;

export const Logout = styled.span``;

export const LogoutIcon = styled(LogoutOutlined)`
  padding-right: 0.3em;
`;
