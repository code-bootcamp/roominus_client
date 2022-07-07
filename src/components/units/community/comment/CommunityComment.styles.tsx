import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #bdbdbd;
`;

export const CommentWriteBox = styled.div`
  width: 100%;
  height: 100px;
  padding: 2em 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f2ebf5;
`;

export const Name = styled.h4`
  height: 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Date = styled.div``;

export const CommentInput = styled.input`
  width: 80%;
  height: 2.5em;
  border: none;
  padding-left: 1em;
`;

// export const Button = styled.button`
//   width: 5em;
//   height: 2.5em;
//   border-radius: 5px;
//   background-color: #4a00e0;
// `;

export const CommentListBox = styled.div`
  width: 100%;
  /* height: 100px; */
  padding: 1em;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  background-color: #ffffff;
  border-bottom: 1px solid #bdbdbd;
`;

export const NameIcon = styled.div`
  width: 3em;
  height: 3em;
  background-color: #bdbdbd;
  border-radius: 50px;
  margin-right: 1em;
`;

export const ListInfoBox = styled.div`
  width: 100%;
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
  /* background-color: red; */
`;

export const InfoTitle = styled.div`
  width: 10em;
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const InfoName = styled.div`
  margin-right: 1em;
`;

export const Comment = styled.div`
  margin-right: 1em;
`;

export const Edit = styled.div`
  margin-right: 1em;
`;

export const Delete = styled.div``;

export const Contents = styled.div``;

export const Arrow = styled.img`
  width: 2em;
  height: 2em;
  margin-right: 1.8em;
`;
export const ReCommentListBox = styled.div`
  width: 100%;
  /* height: 100px; */
  padding: 1em;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  background-color: #f2ebf5;
  border-bottom: 1px solid #bdbdbd;
`;

export const ReCommentWriteBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
