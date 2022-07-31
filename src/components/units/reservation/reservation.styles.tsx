import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { LeftOutlined } from "@ant-design/icons";

export const NoBox = styled.div`
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
`;

export const Notice = styled.p`
  font-size: 1.3em;
`;
export const Container = styled.main`
  width: 100%;

  /* @media ${breakPoints.mobile} {
    padding: 0.5em;
  } */
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2em;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  /* 
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  } */
`;

export const BackBox = styled.div`
  width: 100%;
  font-size: 1.5em;
  padding-top: 1em;
  font-weight: 600;

  :hover {
    color: #a3a8b7;
  }

  /* @media ${breakPoints.mobile} {
    font-size: 1.1em;
  } */

  & span {
    cursor: pointer;
    margin: 0;
  }
`;

export const Left = styled(LeftOutlined)`
  cursor: pointer;
`;

export const Form = styled.form`
  width: 100%;
`;

export const GridBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;

  /* @media ${breakPoints.mobile} {
    display: inline;
  } */
`;

export const FooterBox = styled.div`
  padding-top: 1em;
  display: flex;
  flex-direction: column;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em 0em 3em 0em;
  gap: 2em;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 1px solid #a3a8b7;
  padding-top: 1em;
  padding-bottom: 1em;
  font-weight: 700;

  width: 100%;
  font-size: 1.8em;

  & h4 {
    color: #4a00e0e7;
  }

  @media ${breakPoints.tablet} {
    font-size: 1.5em;
  }
  /* 
  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  } */
`;

export const InformationUse = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  padding-top: 1em;
  width: 100%;

  border: 1px solid #a3a8b7;
  padding-left: 1em;
`;

export const CheckBox = styled.div`
  display: flex;
  font-weight: 700;
  padding-bottom: 0.5em;
  gap: 0.5em;

  & input[type="checkbox"] {
    zoom: 1.3;
    accent-color: #4a00e0e7;
  }
  & span {
    font-size: 1.3em;
  }
`;

export const Point = styled.div`
  padding-left: 1.2em;
  font-size: 0.85em;
  padding-bottom: 0.9em;
  color: #a3a8b7;

  & span {
    font-size: 1em;
    color: red;
  }
`;
