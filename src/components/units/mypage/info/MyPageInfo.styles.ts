import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6.25em 15em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 100%;
`;

export const UserInfoBox = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: column;

  width: 80%;
`;

export const Label = styled.label`
  font-size: 1.25em;
  width: 100%;
`;

export const PhoneBox = styled.div`
  display: flex;
  width: 80%;
`;

export const NumberBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const resetButton = styled.button`
  width: 15%;
  font-weight: 500;
  font-size: 1em;
  margin-bottom: 0.5em;

  color: white;
  background-color: #9691ed;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3em 0em 3em 0em;
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
`;

export const Contents = styled.span`
  width: 4em;
  background-color: white;
  cursor: pointer;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
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

export const CardBox = styled.div`
  display: flex;
  gap: 2em;
`;
