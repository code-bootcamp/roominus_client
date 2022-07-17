import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 70%;
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  margin-top: 5em;

  @media ${breakPoints.tablet} {
    margin-top: 2em;
    width: 90%;
  }

  @media ${breakPoints.mobile} {
    margin-top: 2em;
    width: 100%;
    font-size: 0.9em;
  }
`;

export const CommentTitleBox = styled.div`
  height: 1.5em;
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
  /* background-color: pink; */
`;

export const CommentIcon = styled.img`
  width: 1.5em;
  height: 100%;
  margin-right: 0.5em;
  /* background-color: green; */
`;

export const CommentTitle = styled.h1`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: yellow; */
`;

export const CommentWriteBox = styled.div`
  width: 100%;
  height: 7em;
  padding: 2em 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #bdbdbd;
  background-color: #f2ebf5;

  @media ${breakPoints.mobile} {
    height: 100px;
  }
`;

export const Name = styled.h4`
  width: 15%;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: pink; */

  @media ${breakPoints.mobile} {
    width: 17%;
  }
`;

export const Date = styled.div``;

export const CommentInput = styled.input`
  width: 60%;
  height: 2.5em;
  border: none;
  border-radius: 8px;
  padding-left: 1em;

  @media ${breakPoints.mobile} {
    width: 60%;
  }
`;

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
  /* background-color: red; */
`;

export const InfoTitle = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const InfoName = styled.div`
  margin-right: 1em;
`;

export const Comment = styled.img`
  margin-right: 0.5em;
`;

export const Edit = styled.img`
  margin-right: 0.5em;
`;

export const Delete = styled.img``;

export const Contents = styled.div``;

export const Arrow = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin-left: 1.2em;
  /* margin-right: 1.8em; */
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ReCommentInput = styled.input`
  width: 75%;
  height: 2.5em;
  border: none;
  border-radius: 8px;
  padding-left: 1em;

  @media ${breakPoints.mobile} {
    width: 75%;
  }
`;
