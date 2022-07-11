import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 100%;
  padding: 2em 0em;
  display: flex;
  flex-direction: row;

  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Wrapper = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #f2ebf5;
  padding: 2em;
  margin-right: 2em;

  @media ${breakPoints.tablet} {
    margin-right: 0;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-right: 0;
  }
`;

export const NameDateBox = styled.div`
  height: 2em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  /* background-color: red; */
`;

export const WriterName = styled.h1`
  height: 100%;
  font-size: 1.5em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: yellow; */

  @media ${breakPoints.mobile} {
    font-size: 1.4em;
  }
`;

export const Date = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* background-color: green; */
  color: #a3a8b7;
`;

export const Picture = styled.img`
  width: 100%;
  height: 31em;
  margin: auto;
  border-radius: 10px;

  @media ${breakPoints.mobile} {
    height: 20em;
  }
`;

export const PickAndShareBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PickBox = styled.div`
  height: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: yellow; */
  font-size: 20px;
`;

export const PickIcon = styled.img`
  width: 1.6em;
  margin-right: 0.5em;
`;

export const PickCount = styled.span`
  font-weight: 700;
`;

export const BoardTitle = styled.h1`
  font-size: 1.5em;

  @media ${breakPoints.mobile} {
    font-size: 1.2em;
  }
`;

export const BoardContents = styled.div`
  font-size: 1.1em;
`;

// export const Comment = styled.div`
//   width: 80%;
//   height: 5em;
//   margin: auto;
//   background-color: pink;
// `;

export const ButtonBox = styled.div`
  padding: 4em 0em 0em 0em;
  gap: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
