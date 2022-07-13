import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div``;

export const Comment = styled.section`
  width: 100%;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* height: 250px; */
  border-bottom: 1px solid #a3a8b7;
`;

export const CommentLeftBox = styled.div`
  padding: 10px;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const WriterImage = styled.div`
  width: 54px;
  height: 54px;
  background-color: #5c4a7e;
  border-radius: 100%;
`;
export const CommentRightBox = styled.div`
  padding: 10px;
`;
export const WriterName = styled.div`
  font-weight: 700;
`;
export const Star = styled.span``;
export const CreatedAt = styled.span`
  color: #757575;
`;
export const EscapeRankBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
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
  background-color: #5c4a7e;
  color: white;
  margin: 2px;
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
  background-color: #5c4a7e;
  color: white;
  margin: 2px;
`;

export const Contents = styled.div`
  max-width: 788px;
`;
