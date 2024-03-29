import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommentListBox = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  border-bottom: 1px solid #bdbdbd;
`;

export const Arrow = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin-left: 1.5em;
`;

export const ListInfoBox = styled.div`
  width: 100%;
  padding: 0em 0em 0em 1em;
  display: flex;
  flex-direction: column;
`;

export const InfoTitleBox = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const InfoTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const InfoName = styled.h3`
  margin-bottom: 0em;
  margin-right: 1em;
`;

export const Date = styled.div``;

export const Edit = styled.img`
  width: 1.5em;
  margin-right: 0.5em;
  cursor: pointer;
`;

export const Delete = styled.img`
  width: 1.5em;
  cursor: pointer;
`;

export const Contents = styled.p`
  margin-bottom: 0em;
  font-size: 1.2em;
`;
