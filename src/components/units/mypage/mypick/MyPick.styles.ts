import styled from "@emotion/styled";
import { Card } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2em 2em 2em 2em;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 3em;

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

export const Title = styled.h1``;

export const Etc = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 2em;

  @media ${breakPoints.tablet} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${breakPoints.mobile} {
    margin-top: 2em;
    width: 75%;

    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const PickedCard = styled(Card)``;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10em;
`;
