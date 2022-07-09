import styled from "@emotion/styled";
import { Card } from "antd";

export const Container = styled.main`
  display: flex;

  width: 100%;
  padding: 2em 0em 2em 0em;

  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h1``;

export const PickedCard = styled(Card)`
  margin-right: 2em;
`;
