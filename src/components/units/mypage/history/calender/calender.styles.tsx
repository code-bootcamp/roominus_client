import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { breakPoints } from "../../../../../commons/styles/media";

export const CalenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 60em;
  padding: 2em 2em 2em 2em;

  @media ${breakPoints.mobile} {
    padding: 0.1em;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`;

export const CalenderHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5em;
`;

export const StartMonth = styled.div`
  & span {
    margin-right: 5px;
    font-size: 1.6em;
    font-weight: 600;
  }

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const EndMonth = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: flex-end;
  gap: 1em;
`;

export const ArrowBack = styled(ArrowBackIosIcon)`
  :hover {
    cursor: pointer;
  }
`;

export const ArrowForward = styled(ArrowForwardIosIcon)`
  :hover {
    cursor: pointer;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  &:first-of-type {
    color: #ff7777;
  }
  &:last-child {
    color: #007fff;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

export const Days = styled.div`
  width: 100%;
  height: 2.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5em;
  font-weight: 600;
  border-top: 2px solid purple;
  border-bottom: 2px solid purple;
`;

export const Column = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #a3a8b7;
  border-right: 1px solid #a3a8b7;

  &:last-of-type {
    border-right: none;
  }

  @media ${breakPoints.tablet} {
    height: 7em;
  }

  @media ${breakPoints.mobile} {
    height: 5.5em;
  }
`;

export const Valid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${breakPoints.tablet} {
    height: 100%;
  }

  @media ${breakPoints.mobile} {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const NotValid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${breakPoints.tablet} {
    height: 100%;
  }

  @media ${breakPoints.mobile} {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ValidSpan = styled.span`
  font-size: 0.9em;
  padding: 0.5em;

  @media ${breakPoints.mobile} {
    padding: 0;
  }
`;

export const NotValidSpan = styled.span`
  color: #a3a8b7;
  font-size: 0.9em;
  padding: 0.5em;

  @media ${breakPoints.mobile} {
    padding: 0;
  }
`;

export const ThemeImgae = styled.img`
  width: 100%;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 300ms ease-in-out;
    box-shadow: 3px 3px 0px 0px transparentize(#a3a8b7, 0.5);
    border-radius: 8px;
  }

  @media ${breakPoints.tablet} {
    height: 100%;
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    height: 100%;
  }
`;

export const NoImage = styled.div`
  width: 100%;
  height: 7em;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.3em;
`;

export const CalendarBody = styled.div``;
