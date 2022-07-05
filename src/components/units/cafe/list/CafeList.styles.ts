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
  position: relative; //SearchWrapper만 화면 양옆까지 늘리기
  left: calc(-50vw + 50%);
`;

export const SearchBox = styled.div`
  width: 65%;
  margin: auto;
  height: 226px;
  border-radius: 15px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SearchDetailBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailTitle = styled.h3``;

export const DetailContents = styled.input``;

export const ListWrapper = styled.section`
  /* z-index: 1; */
  height: 400px;
  /* position: absolute; */
  /* top: 380px; */
`;
