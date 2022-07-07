import styled from "@emotion/styled";
import { Card } from "antd";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 5em;
`;

export const PickedCard = styled(Card)`
  margin-right: 2em;
`;
