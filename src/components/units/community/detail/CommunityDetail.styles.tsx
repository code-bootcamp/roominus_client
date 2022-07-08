import styled from "@emotion/styled";

export const Container = styled.main`
  width: 100%;
  padding: 2em 0em;
`;

export const Wrapper = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  /* background-color: #f2ebf5; */
  padding: 2em 4em;
  margin: auto;
`;

export const Picture = styled.img`
  width: 95%;
  height: 550px;
  margin: auto;
  border-radius: 10px;
`;

export const PickBox = styled.div`
  height: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: yellow; */
  font-size: 20px;
`;

export const PickIcon = styled.span`
  margin-right: 0.5em;
`;

export const PickCount = styled.span`
  font-weight: 700;
`;

export const BoardTitle = styled.h1`
  font-size: 1.5em;
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
  padding: 2em 0em 0em 0em;
  gap: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
