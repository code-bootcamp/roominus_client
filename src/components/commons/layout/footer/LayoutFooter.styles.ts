import styled from "@emotion/styled";
import { GithubOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";
export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid gray;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const MenuInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

export const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    font-size: 0.1em;
  }
`;

export const Menu = styled.li`
  margin-left: 2em;
  border-right: 1px solid black;
  padding-right: 1.5em;
  cursor: pointer;

  &:last-of-type {
    border: none;
  }
  font-weight: 600;
  font-size: 1.1em;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;
export const Info = styled.div`
  margin-top: 0.8em;
  font-weight: 400;
  font-size: 0.9rem;
  color: rgba(196, 196, 196, 1);
  @media ${breakPoints.mobile} {
    font-size: 0.1em;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Contact = styled.div`
  text-align: center;
  padding: 10px;
`;

export const ContactIcon = styled(GithubOutlined)`
  font-size: 2.5em;
  color: black;
  :hover {
    cursor: pointer;
  }
`;
