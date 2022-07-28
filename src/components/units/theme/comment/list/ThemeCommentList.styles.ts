import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div``;

export const Comment = styled.section`
  width: 100%;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #a3a8b7;
`;

export const CommentLeftBox = styled.div`
  padding: 10px;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const WriterImage = styled.div`
  position: absolute;
  width: 54px;
  height: 54px;
  background-color: #5c4a7e;
  border-radius: 100%;
`;
export const CommentRightBox = styled.div`
  width: 100%;
  padding: 10px;
`;

export const NameToolBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WriterName = styled.div`
  font-weight: 700;
`;

export const ToolBox = styled.div`
  color: #5c4a7e;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Star = styled.span``;
export const CreatedAt = styled.span`
  color: #757575;
`;
export const EscapeRankBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
  align-items: center;
  gap: 4px;
  font-size: 0.9em;
`;
export const EscapeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  font-weight: 700;
  height: 2.5em;
  border: transparent;
  border-radius: 8px;
  background-color: #5c4a7e;
  color: white;
`;

export const RankButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  text-align: center;
  font-weight: 700;
  height: 2.5em;
  border: transparent;
  border-radius: 8px;
  background-color: #5c4a7e;
  color: white;
  margin: 2px;
`;

export const Contents = styled.div`
  font-size: 1.1em;
  max-width: 788px;
  padding: 10px 0px;
`;

export const CommentList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;
