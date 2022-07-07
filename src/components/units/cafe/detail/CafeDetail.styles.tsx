import styled from "@emotion/styled";

export const Container = styled.main`
  width: 100%;
  padding: 2em 0em;
`;

export const SearchWrapper = styled.section`
  width: 100%;
  /* background-color: #bdbdbd; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CafePicture = styled.img`
  width: 38em;
  height: 25em;
  background-color: pink;
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
`;

export const ThemeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5em;
`;
