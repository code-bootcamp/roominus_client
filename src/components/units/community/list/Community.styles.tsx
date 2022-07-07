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
  padding-top: 2em;
  padding-bottom: 2em;
`;

export const Title = styled.h1``;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  /* height: 58em; */
`;

export const ItemBackground = styled.div`
  /* width: 28em; */
  width: 50%;
  height: 25em;
  background-color: #ebe1f3;
  /* padding-top: 0.5em; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0em 0.5em 2em 0.5em;
`;

export const Picture = styled.img`
  width: 80%;
  height: 80%;
`;

export const NamePickBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: red; */
`;

export const Button = styled.button`
  width: 13em;
  height: 3.5em;
  border-radius: 10px;
  border: none;
  background-color: #4a00e0;
  align-self: flex-end;
  color: white;
  cursor: pointer;
`;

export const BoardName = styled.h4``;

export const Pick = styled.div``;

export const Pagination = styled.div`
  font-size: 20px;
  align-self: center;
  height: 5em;
`;
