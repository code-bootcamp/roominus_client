import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: #dfd0ff;
  padding: 5em;
  margin: auto;
`;

export const Picture = styled.img`
  width: 95%;
  margin: auto;
`;

export const PickBox = styled.div`
  height: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: yellow; */
  font-size: 20px;
`;

export const PickIcon = styled.span`
  margin-right: 0.5em;
`;

export const PickCount = styled.span`
  font-weight: 700;
`;

export const BoardTitle = styled.h1``;

export const Comment = styled.div`
  width: 100%;
  height: 5em;
  background-color: pink;
`;
