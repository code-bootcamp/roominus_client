import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
  }
`;

export const SearchWrapper = styled.section`
  width: 100vw;
  height: 300px;
  background-color: purple;
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
  border: none;
  border-bottom: 1px solid #bdbdbd;
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 50px;
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
`;

export const BestListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BestTitle = styled.h1`
  height: 4em;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// export const BestBox = styled.div`
//   width: 18em;
//   height: 17.5em;
//   border-radius: 15px;
//   background-color: #bdbdbd;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
// `;

// export const BestItem = styled.div``;

// export const BestCafe = styled.div``;

// export const Rank = styled.div`
//   width: 3em;
//   height: 3em;
//   position: absolute;
//   z-index: 1;
//   background-color: pink;
// `;

// export const Location = styled.div`
//   width: 5em;
//   height: 3em;
//   position: absolute;
//   z-index: 1;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   background-color: yellow;
// `;

// export const BestCafeDetail = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* justify-content: space-evenly; */
// `;

// export const BestCafePicture = styled.img`
//   width: 15.8em;
//   height: 12em;
// `;

// export const BestCafeName = styled.h3``;

export const Line = styled.div`
  margin: 2em 0em;
  border-bottom: 0.2em solid #c2c2c2;
`;

export const MoreButtonBox = styled.div`
  height: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MoreButton = styled.button`
  width: 25em;
  height: 4em;
  border-radius: 15px;
  color: white;
  background-color: #26282c;
  font-weight: 700;
`;

export const Flex = styled.div`
  margin-bottom: 2em;
`;

export const Etc = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  /* justify-content: space-between; */
`;
