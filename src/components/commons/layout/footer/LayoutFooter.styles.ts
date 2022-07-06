import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: center;

  border-top: 1px solid #b2b2b2;
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
  display: flex;
  text-align: center;

  @media ${breakPoints.mobile} {
    font-size: 0.1em;
  }
`;

export const MenuInfoWrapper = styled.div`
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
  flex-direction: column;

  @media ${breakPoints.tablet} {
    font-size: 0.1em;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.1em;
  }
`;

export const Info = styled.div`
  margin-top: 0.5em;
  font-weight: 400;
  font-size: 0.9rem;
  color: #d3d3d3;

  @media ${breakPoints.tablet} {
    font-size: 0.1em;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.1em;
  }
`;
