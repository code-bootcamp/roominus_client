import styled from "@emotion/styled";
import { GithubOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";
export const Container = styled.div`
  width: 100%;
  height: 20%;
  padding: 0em 5em 0em 5em;
  /* @media ${breakPoints.mobile} {
    padding: 1em 1em 1em 1em;
  } */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  max-width: 1440px;

  /* @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  } */
`;

export const MenuInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 0.3em;

  /* @media ${breakPoints.mobile} {
    font-size: 0.1em;
  } */
`;

export const Menu = styled.li`
  border-right: 1px solid black;
  padding-right: 1em;

  &:last-of-type {
    border: none;
  }
  font-weight: 600;
  font-size: 1.1em;

  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  margin-top: 0.5em;
  font-weight: 400;
  font-size: 0.9rem;
  color: #d3d3d3;

  /* @media ${breakPoints.mobile} {
    font-size: 0.1em;
  } */
`;
