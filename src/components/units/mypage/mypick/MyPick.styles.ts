import styled from "@emotion/styled";
import { Card } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  display: flex;

  width: 100%;
  padding: 2em 0em 2em 0em;

  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  width: 100%;

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

export const PickedCard = styled(Card)``;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`;
