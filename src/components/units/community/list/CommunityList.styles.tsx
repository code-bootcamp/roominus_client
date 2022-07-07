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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.1em;
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

export const ItemBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* background-color: red; */
  padding: 2em;
  /* width: 100%; */
  /* height: 58em; */
`;

export const ItemBackground = styled.div`
  /* width: 28em; */
  width: 100%;
  height: 380px;
  background-color: #f2ebf5;
  /* background-color: #ffffff; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Picture = styled.img`
  width: 85%;
  height: 270px;
  cursor: pointer;
`;

export const NamePickBox = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
`;

export const BoardName = styled.h3`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Pick = styled.span`
  font-size: 1.8em;
  cursor: pointer;
`;

export const ButtonBox = styled.div`
  margin: 1em 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Pagination = styled.div`
  font-size: 20px;
  align-self: center;
  /* height: 5em; */
`;
