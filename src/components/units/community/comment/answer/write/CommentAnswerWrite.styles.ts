import styled from "@emotion/styled";
import { breakPoints } from "../../../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    margin-top: 2em;
    width: 90%;
  }
`;

export const ReCommentListBox = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: row;
  background-color: #f2ebf5;
  border-bottom: 1px solid #bdbdbd;
`;

export const Arrow = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin-left: 1.2em;
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
  margin-right: 1em;
`;

export const ReCommentWriteBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ReCommentInput = styled.input`
  width: 80%;
  height: 2.5em;
  border: none;
  border-radius: 8px;
  padding-left: 1em;

  @media ${breakPoints.mobile} {
    width: 83%;
  }
`;
