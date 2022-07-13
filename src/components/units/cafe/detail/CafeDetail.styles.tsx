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
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    /* width: 50%; */
  }
`;

export const CafePicture = styled.img`
  width: 38em;
  height: 36em;
  background-color: pink;
  object-fit: cover;
  /* border: 1px solid #bdbdbd; */

  @media ${breakPoints.mobile} {
    width: 23em;
    height: 22em;
  }
`;

export const InfoBox = styled.div`
  width: 38em;
  padding: 3em;
  /* gap: 2em; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  border: 1px solid #bdbdbd;
  /* background-color: #bdbdbd; */

  @media ${breakPoints.mobile} {
    width: 23em;
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

export const CafePhone = styled.div``;

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

export const ContentsTitle = styled.h3``;

export const Contents = styled.div``;

export const Map = styled.img`
  width: 100%;
  height: 13.7em;
`;

export const LocationBox = styled.div``;

export const Location = styled.div``;

export const LocationDetail = styled.div`
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
  align-self: center;

  @media ${breakPoints.mobile} {
    margin-top: 0;
  }
`;
