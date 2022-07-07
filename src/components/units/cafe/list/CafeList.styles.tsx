import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: lightcoral; */
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
  }
`;

export const SearchWrapper = styled.section`
  width: 100vw;
  height: 300px;
  background: linear-gradient(
    90deg,
    rgba(142, 45, 226, 1) 30%,
    rgba(74, 0, 224, 1) 100%
  );
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
  justify-content: space-evenly;
  margin: auto;
`;

export const SearchDetailBox = styled.div`
  width: 100%; //70vw
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const DetailBox = styled.div`
  width: 50%; //35vw
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DetailTitle = styled.h3`
  width: 10%; //3.5vw
`;

export const LocationButton = styled.button`
  width: 15%;
  height: 40px;
  margin-right: 1em;
  border: none;
  background-color: #a3a8b7;
  color: white;
  font-weight: 500;
  /* gap: 10px; */
`;

export const DetailContents = styled.input`
  width: 70%;
  height: 40px;
  border: none;
  outline: none;
  border-bottom: 1px solid #bdbdbd;
  padding-left: 0.5em;
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 50px;
  gap: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.button`
  width: 15%;
  margin-right: 1em;
  background-color: #a5a0fb;
  border: none;
  color: white;
`;

export const ListWrapper = styled.section`
  width: 100%;
  /* background-color: lightcoral; */
`;

export const BestListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: lightblue; */
`;

export const BestTitle = styled.h1`
  height: 100px;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Line = styled.div`
  margin: 2em 0em;
  border-bottom: 0.1em solid #c2c2c2;
`;

export const Flex = styled.div`
  margin-bottom: 2em;
`;

export const Etc = styled.div`
  width: 100%;
  /* background-color: lightgreen; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px; */
  /* margin-bottom: 2em; */
`;

export const MoreButtonBox = styled.div`
  height: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MoreButton = styled.button`
  width: 25em;
  height: 4em;
  border-radius: 10px;
  color: white;
  background-color: #26282c;
  font-weight: 700;
`;
