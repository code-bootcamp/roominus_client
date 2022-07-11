import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em 0em;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Etc = styled.div`
  width: 100%;
  /* background-color: lightgreen; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px; */
  /* margin-bottom: 2em; */

  @media ${breakPoints.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakPoints.mobile} {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  align-self: center;
`;

export const ItemBackground = styled.div`
  /* width: 28em; */
  width: 100%;
  height: 320px;
  background-color: #ffffff;
  border: 1px solid #a3a8b7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    transform: scale(1.02);
    /* cursor: pointer; */
  }
  transition: all 250ms ease-in-out;
  /* justify-content: space-evenly; */
`;

export const Picture = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 10px 10px 0px 0px;
  cursor: pointer;
`;

export const InfoBox = styled.div`
  width: 85%;
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: green; */
`;

export const NameDateBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DatePickBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: yellow; */
`;

export const WriteName = styled.h3`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* color: #a3a8b7; */
  /* background-color: green; */
`;

// export const Date = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   color: #a3a8b7;
//   background-color: green;
// `;

export const BoardName = styled.h3`
  font-size: 1.3em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* background-color: gray; */
`;

export const PickBox = styled.div`
  height: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: pink; */
`;

export const Pick = styled.img`
  width: 1.8em;
  height: 100%;
  cursor: pointer;
  margin-right: 0.3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: green; */
`;

export const PickCount = styled.h3`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: orange; */
`;

export const ButtonBox = styled.div`
  margin: 1em 0em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${breakPoints.mobile} {
    width: 70%;
    /* background-color: red; */
  }
`;

export const Pagination = styled.div`
  font-size: 20px;
  align-self: center;
  /* height: 5em; */
`;
