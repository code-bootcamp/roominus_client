import styled from "@emotion/styled";

// export const Container = styled.main`
//   width: 100%;
//   background-color: gray;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em 0em;
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
`;

export const Title = styled.h1`
  font-size: 2em;
  align-self: center;
`;

// export const ItemBox = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   background-color: red;
//   padding: 2em;
//   width: 100%;
//   height: 58em;
// `;

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

export const DatePickBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: yellow; */
`;

export const Date = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #a3a8b7;
  /* background-color: green; */
`;

export const BoardName = styled.h3`
  font-size: 1.3em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* background-color: gray; */
`;

export const PickBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: pink; */
`;

export const Pick = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  margin-right: 0.3em;
`;

export const PickCount = styled.h3`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonBox = styled.div`
  margin: 1em 0em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Pagination = styled.div`
  font-size: 20px;
  align-self: center;
  /* height: 5em; */
`;
