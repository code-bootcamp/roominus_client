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
  height: 10em;
  gap: 5%;
`;
export const ThemeBox = styled.div`
  width: 30%;
  border: 1px solid #d9d6d0;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1em;
`;

export const ThemeTitle = styled.label`
  font-size: 1.2em;
`;

export const ThemeSubTitle = styled.span`
  color: "#5F6269";
  font-size: 0.7em;
  padding-bottom: 0.5em;

  @media ${breakPoints.tablet} {
    font-size: 0.8em;
    text-align: center;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.05em;
    text-align: center;
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
  font-size: 1em;
`;

export const Contents = styled.span`
  width: 4em;
  background-color: white;
  cursor: pointer;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 1em;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;
export const Row = styled.li`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const ColumnHeaderBasic = styled.div`
  width: 30%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 40%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 30%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 40%;
  text-align: center;
`;
