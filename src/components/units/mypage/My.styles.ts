import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 60em;
  padding: 2em 2em 2em 2em;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 50em;
`;

export const CountBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Title = styled.h1``;

export const TableTop = styled.div`
  border-bottom: 2px solid #b6a2ea;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid #b6a2ea;
  margin-bottom: 5em;
`;

export const TitleRow = styled.li`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 2px solid #b6a2ea;
  font-size: 1.2em;
`;
export const Row = styled.li`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  &:last-of-type {
    border: none;
  }
`;

export const ColumnHeaderNumber = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderBasic = styled.div`
  width: 30%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 40%;
  text-align: center;
`;

export const ColumnNumber = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 30%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 40%;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
`;

export const PaginationsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`;
