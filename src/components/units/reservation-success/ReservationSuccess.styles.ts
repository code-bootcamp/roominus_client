import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { Card } from "antd";

export const Container = styled.main`
  padding: 2em 0em 2em 0em;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitle = styled.span`
  padding: 1em;
  font-size: 2em;
`;

export const Wrapper = styled.section`
  width: 40%;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
  }
`;

export const PickedCard = styled(Card)``;

export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  font-size: 1em;
  padding: 1em;
  border: 1px solid gainsboro;
  text-align: center;
`;

export const NotionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 5em 0em 3em 0em;
`;

export const NoticeTitle = styled.span`
  border-top: 2px solid #b2b2b2;
  font-size: 2.5em;
  margin-bottom: 10px;
`;

export const NoticeImg = styled.img`
  height: 250px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  padding: 1em 0em 1em 0em;
`;

export const CancelBtn = styled.button`
  width: 100px;
  height: 4em;
  border-radius: 10px;
  font-size: 1em;
  border: none;
  color: white;
  background-color: #b2b2b2;
  cursor: pointer;

  margin-right: 0.5em;
`;

export const SubmitBtn = styled.button`
  width: 100px;
  height: 4em;
  border-radius: 10px;
  font-size: 1em;
  border: none;
  color: white;
  background-color: #4a00e0;
  cursor: pointer;

  margin-left: 0.5em;
`;

export const ButtonTitle = styled.a`
  color: white;
`;
