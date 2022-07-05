import styled from "@emotion/styled";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SearchWrapper = styled.section`
  width: 100vw;
  height: 300px;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; //SearchWrapper만 화면 끝까지 늘리기
  left: calc(-50vw + 50%);
`;

export const SearchBox = styled.div`
  width: 70vw;
  height: 70%;
  border-radius: 15px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const SearchDetailBox = styled.div`
  width: 100%; //70vw
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const DetailBox = styled.div`
  width: 50%; //35vw
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const DetailTitle = styled.h3`
  width: 10%; //3.5vw
`;

export const DetailContents = styled.input`
  width: 70%;
`;

export const ListWrapper = styled.section``;

export const Line = styled.div``;
