import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { breakPoints } from "../../../../../commons/styles/media";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Rate } from "antd";
import { IStylesProps } from "./ThemeCommentWriter.types";

export const Wrapper = styled.section`
  position: relative;
  background-color: #e5d3eb;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 250px;
  border-radius: 8px;
  box-shadow: ${(props: IStylesProps) =>
    props.isEdit ? "0px 0px 4px 0 #5c4a7e" : ""};
`;

export const StarBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StarScore = styled(Rate)`
  /* .ant-rate-star-second {
    color: #c6c8de;
  } */
`;

export const Star = styled(FontAwesomeIcon)`
  color: #c6c8de;
  font-size: 3em;

  @media ${breakPoints.tablet} {
    font-size: 3em;
  }

  @media ${breakPoints.mobile} {
    font-size: 8vw;
  }
`;

export const EscapeRankBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;

  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

export const IsEscapeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const EscapeLabel = styled.label`
  display: flex;
  flex-direction: row;
`;
export const EscapeInput = styled.input`
  display: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;
`;

export const EscapeButton = styled.div`
  cursor: pointer;
  display: absolute;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0px 15px;
  font-weight: 700;
  height: 35px;
  border: transparent;
  border-radius: 8px;
  color: white;
  margin: 2px;
  background-color: ${(props: IStylesProps) =>
    props.checked ? "#A08BF3" : ""};
`;

export const RankBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
  }
`;

export const RadioGroup = styled(ButtonGroup)``;

export const RadioButton = styled(Button)`
  border: 1px solid #a08bf3;
  background-color: ${(props: IStylesProps) =>
    props.selected || props.checked ? "#A08BF3" : ""};
  color: #4a00e0;
  :focus {
    background-color: #a08bf3;
  }
`;

export const RankButton = styled.input`
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
  white-space: nowrap;
`;

export const CommentBox = styled.div`
  padding: 1em;
  gap: 0.9em;
  max-width: 860px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CommentWriter = styled.div`
  font-size: 1em;
  margin-right: 5px;
`;
export const CommentInput = styled.input`
  max-width: 630px;
  width: 100%;
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
