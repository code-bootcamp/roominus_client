import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1250px;
  padding: 6.25rem 15rem;
  background-color: beige;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 90rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Label = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  width: 25%;
  color: #464646;

  @media ${breakPoints.tablet} {
    word-break: keep-all;
    width: 22%;
    font-size: 1.2rem;
  }
`;
