import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0em 0em 2em 0em;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Etc = styled.ul`
  margin-bottom: 0px;
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
  /* font-size: 2em; */
  /* align-self: center; */
  height: 100px;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0px;
`;

export const ItemBackground = styled.li`
  /* width: 28em; */
  width: 100%;
  height: 320px;
  background-color: #ffffff;
  border: 1px solid #d9d6e0;
  box-shadow: 0px 4px 4px rgba(217, 214, 224, 0.25);
  border-radius: 8px;
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
  border-radius: 8px 8px 0px 0px;
  cursor: pointer;
  /* object-fit: cover; */
`;

export const InfoBox = styled.div`
  width: 85%;
  margin-top: 1em;
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
  align-items: center;
  /* background-color: green; */
`;

export const PickCount = styled.p`
  margin-bottom: 0px;
  height: 2em;
  font-weight: 500;
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

export const RedHeart = styled(FontAwesomeIcon)`
  /* padding: 2px; */
  font-size: 17px;
  color: #e35d5b;
  margin-right: 0.3em;
  /* background-color: pink; */
`;

// -------------------------- 0711 hani
