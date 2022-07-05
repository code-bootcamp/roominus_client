import styled from "@emotion/styled";
import { GithubOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  max-width: 1440px;
  border-top: 1px solid gray;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const MenuInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  border-right: 1px solid black;
  padding-right: 1em;
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
  color: #d3d3d3;
  @media ${breakPoints.mobile} {
    font-size: 0.1em;
  }
`;

export const GitIcon = styled(GithubOutlined)`
  font-size: 2em;
  color: #d3d3d3;

  :hover {
    cursor: pointer;
  }
`;
