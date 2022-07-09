import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.main`
  padding: 2em 0em 2em 0em;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerTitle = styled.h1`
  padding: 1em;
  font-size: 2em;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
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

    display: flex;
    flex-direction: column;
  }
`;

export const DataBox = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1em;
  padding: 1em;

  @media ${breakPoints.mobile} {
    font-size: 2em;
  }
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

  @media ${breakPoints.mobile} {
    font-size: 2em;
  }
`;

export const NoticeImg = styled.img`
  height: 15.63em;

  @media ${breakPoints.tablet} {
    height: 12em;
  }

  @media ${breakPoints.mobile} {
    height: 8em;
  }
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
