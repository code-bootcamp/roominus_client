import styled from "@emotion/styled";
import { EditOutlined } from "@ant-design/icons";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  width: 100%;
  gap: 2em;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 800px;
  background-size: 372px 800px;
  background-image: url("/img/mypage/ticket.png");

  padding-top: 22em;
`;

export const Label = styled.label`
  font-size: 1em;
`;

export const UserData = styled.span`
  font-size: 1.3em;
  cursor: pointer;
`;

export const PhoneBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

export const NumberBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const resetButton = styled(EditOutlined)`
  font-size: 1.3em;
  padding: 0.2em;
  color: #4a00e0;
  cursor: pointer;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2em;
`;

export const ThemeBoxs = styled.div`
  display: flex;
  justify-content: center;
  height: 8em;
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
  font-size: 0.8emem;
`;

export const ThemeSubTitle = styled.span`
  color: darkgray;
  font-size: 0.6em;
  padding-bottom: 0.5em;
`;

export const ThemeIcon = styled.img`
  width: 4em;
  height: 3em;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  transition: all 250ms ease-in-out;
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

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
