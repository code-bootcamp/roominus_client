import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2em 2em 2em 2em;

  @media ${breakPoints.mobile} {
    padding: 1em 0.1em 1em 0.1em;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 3em;
  min-height: 50em;

  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CountBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  @media ${breakPoints.mobile} {
    font-size: 1.2em;
  }
`;

export const Etc = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2em;

  @media ${breakPoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const PaginationsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`;
