import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  height: 3em;
  background: linear-gradient(90deg, #8e2de2 3.31%, #4a00e0 100%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  color: white;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;
  font-size: 0.8em;
`;
