import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.main``;

export const Wrapper = styled.section`
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
  }
`;

export const StepBar = styled.div`
  width: 100%;
  height: 3.5em;

  display: flex;
  margin: 0.5em;
`;

export const Step = styled.div`
  width: 25%;
  border: 1px solid white;
  text-align: center;
  color: white;
  font-size: 1.3em;
  padding: 13px;

  background-color: ${(props) => (props.isActive ? "#7C21E1" : "darkGray")};
`;
export const UL = styled.div`
  background-color: aliceblue;
`;

export const Row = styled.li`
  display: flex;
  flex-direction: row;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const Info = styled.div``;

export const NotionBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 1em;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 1em;
`;

export const buttonWrapper = styled.div`
  display: flex;
`;
