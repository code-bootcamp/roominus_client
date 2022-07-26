import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { GithubOutlined } from "@ant-design/icons";

export const Container = styled.div`
  width: 100%;
  height: 22em;

  display: flex;
  justify-content: center;

  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: center;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
    height: 36em;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-top: 2em;
  display: flex;
  text-align: left;
  justify-content: center;

  @media ${breakPoints.mobile} {
    font-size: 1em;
    width: 100%;
    text-align: center;
    height: 22em;
  }
`;

export const MenuInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuWrapper = styled.ul`
  display: flex;
  justify-content: center;
  height: 5em;
`;

export const Menu = styled.li`
  margin-right: 20px;
  border-right: 1px solid black;
  padding-right: 15px;
  cursor: pointer;

  &:last-of-type {
    border: none;
  }

  font-weight: 600;
  font-size: 1.3em;

  @media ${breakPoints.tablet} {
    margin-right: 1em;
    border: none;
  }

  @media ${breakPoints.mobile} {
    text-align: center;
    text-align: center;
    font-size: 0.8em;

    &:last-of-type {
      padding: 0;
      margin: 0;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media ${breakPoints.tablet} {
    font-size: 0.9em;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoLeftBox = styled.div`
  width: 165%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const InfoTitle = styled.h2`
  font-weight: 600;
  color: #a3a8b7;

  @media ${breakPoints.mobile} {
    font-size: 1.2em;
  }
`;

export const Info = styled.span`
  font-weight: 500;
  color: #a3a8b7;
  line-height: 2em;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

export const DividedLine = styled.div`
  height: 100%;
  border-right: 1px solid #d3d3d3;
  align-self: center;
  margin: 0px 10px;
`;

export const InfoRightBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  float: right;
`;

export const InfoGithub = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 1em;
  height: 8em;
  color: #a3a8b7;

  @media ${breakPoints.tablet} {
    height: 5em;
  }

  @media ${breakPoints.mobile} {
    justify-content: center;
    height: 3em;
  }
`;

export const Github = styled(GithubOutlined)`
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    color: #a08bf3;
  }

  font-size: 2em;
  transition: all 300ms ease-in-out;

  @media ${breakPoints.mobile} {
    font-size: 1.7em;
  }
`;

export const Logo = styled.img`
  width: 6em;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 7em;
  }
`;
