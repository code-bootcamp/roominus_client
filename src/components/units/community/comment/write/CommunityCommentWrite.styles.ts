import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.9em;
  }
`;

export const CommentTitleBox = styled.div`
  height: 1.5em;
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
`;

export const CommentIcon = styled.img`
  width: 1.5em;
  height: 100%;
  margin-right: 0.5em;
`;

export const CommentTitle = styled.h1`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const Name = styled.h3`
  margin-bottom: 0em;
  width: 17%;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${breakPoints.mobile} {
    width: 17%;
  }
`;

export const CommentInput = styled.input`
  width: 60%;
  height: 2.5em;
  border: none;
  border-radius: 8px;
  padding-left: 1em;

  @media ${breakPoints.mobile} {
    height: 3em;
    width: 65%;
  }
`;
