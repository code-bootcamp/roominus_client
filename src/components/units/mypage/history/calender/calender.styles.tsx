import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const CalenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 60em;
  padding: 2em 2em 2em 2em;
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
  display: flex;
  flex-direction: row;
  text-align: center;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;

  &:last-of-type {
    border-right: none;
  }

  height: 8em;
  width: 100%;
`;

export const Valid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NotValid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ValidSpan = styled.span``;

export const NotValidSpan = styled.span`
  color: darkgray;
`;

export const ThemeImgae = styled.img`
  width: 6em;
  height: 6.2em;

  :hover {
    cursor: pointer;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.3em;
`;

export const CalendarBody = styled.div``;
