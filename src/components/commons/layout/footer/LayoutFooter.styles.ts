import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { GithubOutlined } from "@ant-design/icons";

export const Container = styled.div`
  width: 100%;
  height: 20%;
  padding-top: 1em;
  padding-bottom: 1em;

  display: flex;
  justify-content: center;

  padding-top: 1.5em;

  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: center;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  text-align: left;
  justify-content: center;

  @media ${breakPoints.mobile} {
    font-size: 0.1em;
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
  margin-bottom: 10px;
`;

export const Menu = styled.li`
  margin-right: 20px;
  border-right: 1px solid white;
  padding-right: 20px;
  cursor: pointer;
  &:last-of-type {
    border: none;
  }
  font-weight: 600;
  font-size: 1.1rem;

  @media ${breakPoints.tablet} {
    padding-right: 0;
    margin-bottom: 0.5rem;
    text-align: center;
    border: none;
    font-size: 1.1rem;
  }
  @media ${breakPoints.mobile} {
    padding-right: 0;
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 0.5rem;
    border: none;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media ${breakPoints.tablet} {
    font-size: 0.1em;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.1em;
    display: flex;
    flex-direction: column;
  }
`;

export const InfoLeftBox = styled.div`
  width: 150%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${breakPoints.mobile} {
    width: 100%;

    font-size: 0.1em;
    display: flex;
    flex-direction: column;
  }
`;

export const InfoTitle = styled.h3`
  font-weight: 700;
  color: #a3a8b7;
`;

export const Info = styled.span`
  margin-top: 0.5em;
  font-weight: 400;
  font-size: 0.9rem;
  color: #a3a8b7;

  @media ${breakPoints.tablet} {
    font-size: 0.1em;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.1em;
  }
`;

export const ContactUS = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  color: #a3a8b7;

  :hover {
    cursor: pointer;
    color: #282828;
  }
  @media ${breakPoints.tablet} {
    font-size: 0.1em;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.1em;
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

  @media ${breakPoints.mobile} {
  }
`;

export const InfoGithub = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Github = styled(GithubOutlined)`
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    color: #282828;
  }

  color: #a3a8b7;
  /* font-size: 1.7em; */
  font-size: 20px;
  transition: all 300ms ease-in-out;
`;
