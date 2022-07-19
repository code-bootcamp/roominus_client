import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  /* margin: auto; */
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    margin-top: 2em;
    /* width: 100%; */
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

export const Name = styled.h3`
  margin-bottom: 0em;
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
