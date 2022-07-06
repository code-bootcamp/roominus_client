import styled from "@emotion/styled";

export const Wrapper = styled.section`
  background-color: #f2ebf5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 290px;
  border-radius: 8px;
`;

export const StarBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EscapeRankBox = styled.div`
  width: 530px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IsEscapeBox = styled.div`
  width: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EscapeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  font-weight: 700;
  height: 35px;
  border: transparent;
  border-radius: 8px;
  background-color: #26282c;
  color: white;
  margin: 2px;
`;

export const RankBox = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RankButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  text-align: center;
  font-weight: 700;
  height: 35px;
  border: transparent;
  border-radius: 8px;
  background-color: #26282c;
  color: white;
  margin: 2px;
`;

export const CommentBox = styled.div`
  width: 850px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CommentWriter = styled.h3``;
export const CommentInput = styled.input`
  width: 636px;
  height: 56px;
  padding: 10px;
  border: transparent;
  border-radius: 5px;
`;
export const SubmitButton = styled.button`
  width: 90px;
  height: 55px;
  border: transparent;
  border-radius: 5px;
  font-weight: 700;
  background-color: #4a00e0;
  color: white;
  margin-left: 5px;
`;
