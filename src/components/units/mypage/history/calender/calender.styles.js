import styled from "@emotion/styled";

export const CalenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 2em;
`;

export const CalenderHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
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
  cursor: pointer;
`;

export const EndMonth = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: flex-end;
  gap: 1em;
  cursor: pointer;

  :hover {
    color: gray;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  padding-left: 1%;
  background: transparentize(theme.$step-color, 0.6);
  border-radius: 10px;
`;

export const Days = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  font-weight: 600;
  border-top: 1px solid purple;
  border-bottom: 1px solid purple;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  /* border: 0.4px solid transparentize(gray, 0.4); */
  /* border-radius: 3px; */
  height: 5em;
`;

export const Disabled = styled.div``;

export const Valid = styled.div`
  :hover {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    box-shadow: 3px black 0px 0px transparentize(gray, 0.5);
    transform: scale(1.01);
    border: none;
    background: transparentize(red, 0.5);
  }

  margin: 4px 0 0 4px;
`;
export const NotValid = styled.div`
  color: gray;
`;

export const ValidSpan = styled.span`
  :hover {
    cursor: pointer;
    background-color: red;
    transition: 0.2s ease-in-out;
    box-shadow: 3px black 0px 0px transparentize(gray, 0.5);
    transform: scale(1.01);
    border: none;
    background: transparentize(red, 0.5);
  }

  margin: 4px 0 0 4px;
`;
export const NotValidSpan = styled.span`
  color: gray;
`;

export const Selected = styled.div`
  box-shadow: 3px black 0px 0px transparentize(gray, 0.5);
  transform: scale(1.02);
  border: none;
  font-weight: 600;
  color: white;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: blue;
  font-size: 1.5em;
`;

export const CalendarBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
