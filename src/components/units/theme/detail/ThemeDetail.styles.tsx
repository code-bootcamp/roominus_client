import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  padding: 2em 0px;

  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: column;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ThemeInfoWrapper = styled.section`
  width: 100%;
  height: 560px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;
export const ThemeLeftBox = styled.div``;

export const ThemeImg = styled.img`
  max-width: 370px;
  height: 560px;

  @media ${breakPoints.tablet} {
    max-width: 300px;
  }

  @media ${breakPoints.mobile} {
  }
`;
export const ThemeRightBox = styled.div`
  min-width: 600px;
  max-width: 650px;
  max-height: 560px;
  padding: 5px 20px;
  float: right;

  @media ${breakPoints.tablet} {
    min-width: 450px;
    max-width: 650px;
    max-height: 560px;
    padding: 5px 20px;
    float: right;
  }
  @media ${breakPoints.mobile} {
    min-width: fit-content;
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    height: 100%;
  }
`;

export const GenreTag = styled.div`
  width: 140px;
  height: 45px;
  border-radius: 8px;
  background-color: #492396b0;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const ThemeTitle = styled.h2`
  color: #26282c;
  font-size: 1.5em;
`;

export const ThemeContents = styled.h5`
  padding: 10px;
  border-top: 1px solid #c8c8c8;
  border-bottom: 1px solid #c8c8c8;
  font-size: 1.3em;
  @media ${breakPoints.tablet} {
    letter-spacing: 0.6px;
    line-height: 1.1;
  }
`;

export const RankTimeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 5px;
  }
`;

export const ThemeRank = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;
export const ThemeTime = styled.div``;
export const ChargeBox = styled.div``;
export const ThemeCharge = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${breakPoints.mobile} {
    padding: 10px 0px;
    font-size: 0.8em;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${breakPoints.tablet} {
    justify-content: left;
  }
`;

export const ReservationButton = styled.button`
  width: 45vw;
  min-width: 20em;
  height: 56px;
  border-radius: 8px;
  font-weight: 700;
  border: transparent;
  background-color: #4a00e0;
  color: white;

  :hover {
    cursor: pointer;
    background: linear-gradient(90deg, #7c21e1 0%, #4a00e0 100%);
  }
  @media ${breakPoints.mobile} {
  }
`;
