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
  }
`;

export const SearchWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 4em;

  @media ${breakPoints.mobile} {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0em;
  }
`;

export const InfoSummaryBox = styled.div`
  width: 50%;

  @media ${breakPoints.mobile} {
    width: 130%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0em;
  }
`;

export const CafePicture = styled.img`
  width: 100%;
  height: 37em;
  object-fit: cover;

  @media ${breakPoints.mobile} {
    height: 23em;
  }
`;

export const InfoTitleBox = styled.div`
  width: 100%;
  padding: 2em 0em 1em 0em;
  display: flex;
  flex-direction: column;
`;

export const InfoBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    width: 130%;
    padding: 1em 0em;
  }
`;

export const NamePhoneBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CafeName = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

export const CafePhone = styled.div`
  display: flex;
  flex-direction: row;

  & p {
    font-size: 1.3em;
    margin: 0em 0em 0em 0.3em;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoLocationBox = styled.div``;

export const InfoContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1em 0em 2em 0em;
`;

export const LocationFlex = styled.div`
  display: flex;
  flex-direction: row;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentsTitle = styled.h2``;

export const Contents = styled.p`
  font-size: 1.3em;
`;

export const Map = styled.div`
  width: 100%;
  height: 22em;
`;

export const LocationBox = styled.div``;

export const Location = styled.div`
  display: flex;
  flex-direction: row;

  & p {
    font-size: 1.3em;
    margin: 0em 0em 0em 0.3em;
  }
`;

export const LocationIcon = styled.img`
  width: 1em;
`;

export const LocationDetail = styled.p`
  font-size: 1.2em;
  margin: 0.3em 0em 0em 0.5em;
  color: #a3a8b7;

  @media ${breakPoints.mobile} {
    font-size: 1.1em;
    margin: 0em 0em 0.5em 0em;
  }
`;

export const Theme = styled.div`
  width: 100%;
  margin: 1em 0em;

  @media ${breakPoints.mobile} {
  }
`;

export const ThemeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5em;

  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0em;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    margin-top: 0;
  }
`;
