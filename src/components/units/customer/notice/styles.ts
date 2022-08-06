import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  width: 100%;
  padding: 2em 0em 2em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 1.1em;
    margin: 0;

    @media ${breakPoints.mobile} {
      font-size: 0.9em;
      margin: 0;
    }
  }
`;

export const TitleBox = styled.div`
  margin-bottom: 1em;
`;
export const Title = styled.h1`
  font-size: 1.9em;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const HighLighting = styled.div`
  opacity: 0.35;
  height: 1em;
  margin-left: 0.1em;
  margin-top: -2.5em;
  margin-bottom: 2em;
  background-color: purple;
`;
export const ContentsBox = styled.div`
  font-size: 1.1em;

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

export const NoticeImage = styled.img`
  width: 100%;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5em;
`;
