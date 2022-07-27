import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  padding: 3em 0px;
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
  border-radius: 8px;
  max-width: 370px;
  height: 560px;
  box-shadow: 7px 7px 39px rgba(202, 136, 217, 0.25);

  @media ${breakPoints.tablet} {
    max-width: 300px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const ThemeRightBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  max-height: 560px;
  padding: 5px 40px;
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
    padding: 5px;
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
  display: flex;
  align-items: center;
  color: #26282c;
  font-size: 3em;
  font-family: "GowunDodum-Regular";

  @media ${breakPoints.tablet} {
    font-size: 2.3em;
  }
  @media ${breakPoints.mobile} {
    font-size: 2em;
    width: auto;
  }
`;

export const CafeTitle = styled.div`
  color: #a3a8b7;
  font-size: 0.6em;
`;

export const Like = styled.div`
  position: absolute;
  right: 7.5%;
  top: 7%;
  @media ${breakPoints.mobile} {
    right: 9%;
  }
`;

export const ThemeSubTitle = styled.h3`
  font-style: oblique;
  padding: px 0px;
  font-size: 1.4em;
`;

export const ThemeContents = styled.h5`
  font-style: oblique;
  font-weight: 400;
  padding: 10px;
  border-top: 1px solid #c8c8c8;
  border-bottom: 1px solid #c8c8c8;
  font-size: 1.3em;
  min-height: 260px;

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
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
`;

export const LimitBox = styled.div`
  width: 50%;
  gap: 25px;
  display: flex;
  flex-direction: column;
`;

export const AgeLimit = styled.div`
  color: red;
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
  gap: 5px;
  @media ${breakPoints.tablet} {
    justify-content: left;
  }
`;

export const ReservationButton = styled.button`
  width: 100%;
  height: 50px;
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

export const MoveToListButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  font-weight: 700;
  border: transparent;
  background-color: #26282c;
  color: white;
  :hover {
    cursor: pointer;
  }
`;
