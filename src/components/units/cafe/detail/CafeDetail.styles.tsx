import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 100%;
  padding: 2em 0em;

  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: red; */
  }
`;

export const SearchWrapper = styled.section`
  width: 100%;
  /* background-color: #bdbdbd; */
  display: flex;
  flex-direction: row;
  gap: 4em;
  /* align-items: center; */

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0em;
  }
`;

export const InfoSummaryBox = styled.div`
  width: 50%;

  @media ${breakPoints.mobile} {
    width: 28em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0em;
  }
`;

export const CafePicture = styled.img`
  width: 100%;
  height: 37em;
  /* background-color: pink; */
  object-fit: cover;

  @media ${breakPoints.mobile} {
    width: 28em;
    height: 26em;
  }
`;

export const InfoTitleBox = styled.div`
  width: 100%;
  padding: 3em 0em 0em 0em;
  /* gap: 2em; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  /* border: 1px solid #bdbdbd; */
  /* background-color: #bdbdbd; */

  @media ${breakPoints.mobile} {
    width: 28em;
    padding: 1.1em;
  }
`;

export const InfoBox = styled.div`
  /* width: 38em; */
  width: 50%;
  /* padding: 0em 3em 0em 0em; */
  /* gap: 2em; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  /* border: 1px solid #bdbdbd; */
  /* background-color: #bdbdbd; */

  @media ${breakPoints.mobile} {
    width: 28em;
    padding: 1.1em;
  }
`;

export const NamePhoneBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5em;
`;

export const CafeName = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

// export const LocationPhoneBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: red;
// `;

export const CafePhone = styled.div`
  font-size: 1.3em;
  /* background-color: pink; */
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoLocationBox = styled.div`
  /* background-color: yellow;
  gap: 2em; */
`;

export const InfoContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1em 0em 2em 0em;
`;

export const ContentsTitle = styled.h2``;

export const Contents = styled.p`
  font-size: 1.3em;
`;

export const Map = styled.img`
  width: 100%;
  height: 13.7em;
`;

export const LocationBox = styled.div``;

export const Location = styled.div`
  font-size: 1.3em;
  /* background-color: orange; */
`;

export const LocationDetail = styled.p`
  font-size: 1.2em;
  /* background-color: yellow; */
`;

export const Theme = styled.div`
  width: 100%;
  margin: 1em 0em;

  @media ${breakPoints.mobile} {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }
`;

export const ThemeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5em;

  @media ${breakPoints.mobile} {
    /* width: 80%; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0em;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-self: center; */
  /* background-color: pink; */

  @media ${breakPoints.mobile} {
    margin-top: 0;
  }
`;
