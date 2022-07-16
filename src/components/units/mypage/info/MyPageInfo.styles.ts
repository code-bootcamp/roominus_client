import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 2em 0em 2em 0em;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2em;
`;

export const ThemeBoxs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 1em;
`;
export const ThemeBox = styled.div`
  width: 100%;
  height: 10em;
  border: 1px solid #b6a2ea;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1em;

  @media ${breakPoints.mobile} {
    height: 9em;
  }
`;

export const ThemeTitle = styled.label`
  font-size: 1.2em;
`;

export const ThemeSubTitle = styled.span`
  color: "#5F6269";
  font-size: 0.9em;
  padding-bottom: 0.5em;

  @media ${breakPoints.tablet} {
    font-size: 0.8em;
    text-align: center;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ThemeIcon = styled.img`
  width: 5em;
  height: 4em;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  transition: all 250ms ease-in-out;

  @media ${breakPoints.tablet} {
    margin-top: 0.8em;
    width: 4em;
    height: 3em;
  }

  @media ${breakPoints.mobile} {
    margin-top: 0.8em;
    width: 4em;
    height: 3em;
  }
`;

export const InfoTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TableWrapper = styled.div``;

export const addButton = styled.button`
  border: none;
  background-color: white;
  width: 4em;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

export const Label = styled.label`
  font-size: 1.2em;
`;

export const Contents = styled.span`
  width: 4em;
  background-color: white;
  cursor: pointer;
`;

export const TableTop = styled.div`
  border-top: 2px solid #b6a2ea;
  margin-top: 1em;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid #b6a2ea;
`;

export const TitleRow = styled.li`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 2px solid #b6a2ea;
`;

export const Row = styled.li`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid darkgray;

  &:last-of-type {
    border: none;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 30%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 40%;
  text-align: center;
  font-weight: 600;
  font-size: 1.1em;
`;

export const ColumnBasic = styled.div`
  width: 30%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 40%;
  text-align: center;
`;
