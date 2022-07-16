import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 2em 0em 2em 0em;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h1``;

export const TableTop = styled.div`
  border-top: 2px solid #b6a2ea;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-top: 2px solid #b6a2ea;
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
  border-bottom: 1px solid gray;

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
`;

export const ColumnBasic = styled.div`
  width: 30%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 40%;
  text-align: center;

  cursor: pointer;

  :hover {
    color: #4a00e0;
    font-weight: 600;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`;
