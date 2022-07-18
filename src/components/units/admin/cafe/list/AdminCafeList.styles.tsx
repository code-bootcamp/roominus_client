import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 2em 0em;
  font-size: 1.5em;
`;

export const Title = styled.div`
  color: #bf9eeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 1em 0em;
  /* background-color: yellow; */
`;

export const Etc = styled.ul`
  width: 100%;
  /* background-color: lightgreen; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
