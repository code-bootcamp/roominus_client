import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import {
  SettingOutlined,
  LogoutOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { IIsActiveProps } from "../Layout.types";

export const Container = styled.main`
  width: 20%;
  min-height: 100%;
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
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & p {
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }
`;

export const UserNameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 8.13em;
  height: 8.13em;
  background: linear-gradient(
    90deg,
    #6ac0de -0.01%,
    #76bbe0 10.99%,
    #9eabe6 49.99%,
    #b6a2ea 81%,
    #bf9eeb 100%
  );
  margin: 2em 0em 1.5em 0em;
  color: white;
`;

export const UserData = styled.span`
  font-size: 1.4em;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
  transition: all 300ms ease-in-out;
`;

export const UserPoint = styled.span`
  color: #bf9eeb;
  font-weight: 600;
  font-size: 1.15em;
`;
export const line = styled.div`
  border: 1px solid #bf9eeb;
  width: 100%;
`;

export const MenuBoxs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1em;
  height: 25em;
`;

export const MenuItem = styled.li`
  font-weight: ${(props: IIsActiveProps) =>
    props.isActive ? "500" : "normal"};
  cursor: ${(props: IIsActiveProps) => (props.isActive ? "none" : "pointer")};
  color: ${(props: IIsActiveProps) => (props.isActive ? "#BF9EEB" : "#26282C")};

  font-size: 1.5em;
  text-decoration: none;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #dab3f8;
    transition: width 0.6s ease 0s, left 0.6s ease 0s;
    width: 0;
  }

  &:hover {
    &::after {
      width: 100%;
      left: 0;
    }
  }
`;

export const FooterBox = styled.div`
  display: flex;
  gap: 0.3em;
  cursor: pointer;
`;
export const MenuFooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  gap: 0.5em;
  margin-top: 10em;
  padding-bottom: 2em;
`;

export const Setting = styled(SettingOutlined)`
  margin-top: 0.2em;
`;

export const Logout = styled(LogoutOutlined)`
  margin-top: 0.2em;
`;

export const Mail = styled(MailOutlined)`
  margin-top: 0.2em;
`;
