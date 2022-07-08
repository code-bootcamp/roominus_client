import styled from "@emotion/styled";
import { EditOutlined, LogoutOutlined } from "@ant-design/icons";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 40%;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  height: 800px;
  background-size: 372px 800px;
  background-image: url("/img/mypage/ticket.png");

  padding-top: 3.5em;
`;

export const Label = styled.label`
  font-size: 1em;
`;

export const PasswordLabel = styled.label`
  :hover {
    color: #4a00e0;
    cursor: pointer;
    font-weight: 500;
  }
`;
export const UserData = styled.span`
  font-size: 1.3em;
  cursor: pointer;
`;

export const PhoneBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

export const NumberBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const resetButton = styled(EditOutlined)`
  font-size: 1.3em;
  padding: 0.2em;
  color: #4a00e0;
  cursor: pointer;
`;

export const MenuBox = styled.div`
  padding-top: 7em;
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
