import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  padding: 2em 0px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: column;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
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
    width: 100%;
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
    width: 100%;
  }
`;
export const ThemeRightBox = styled.div`
  /* min-width: 600px; */
  width: 100%;
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
    /* max-height: fit-content; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    height: 100%;
    float: none;
    max-width: none;
    min-width: none;
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
  font-size: 2.5em;
`;

export const ThemeSubTitle = styled.h3`
  padding: 15px 0px;
  font-size: 1.5em;
`;

export const ThemeContents = styled.h5`
  padding: 10px;
  border-top: 1px solid #c8c8c8;
  border-bottom: 1px solid #c8c8c8;
  font-size: 1.3em;
  min-height: 200px;

  @media ${breakPoints.tablet} {
    letter-spacing: 0.6px;
    line-height: 1.1;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
  }
`;

export const ThemeInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RankTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: column;
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

export const LimitBox = styled.div`
  width: 50%;
  gap: 25px;
  display: flex;
  flex-direction: column;
`;

export const ThemeTime = styled.div``;
export const ChargeBox = styled.div``;
export const ThemeCharge = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* @media ${breakPoints.mobile} {
    font-size: 0.8em;
  } */
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
    min-width: none;
    width: 100px;
  }
`;
