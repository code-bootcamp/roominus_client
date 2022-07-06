import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
`;

export const Title = styled.h1`
  height: 5em;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoBackground = styled.div`
  width: 100%;
  padding: 3em 8em;
  background-color: #a5a0fb;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const InfoTitle = styled.h4``;

export const Essential = styled.span`
  color: red;
`;

export const InfoInput = styled.input`
  border: none;
  padding-left: 0.5em;
`;

export const WebEditor = styled.div`
  width: 100%;
  height: 20em;
  background-color: white;
`;
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.button`
  width: 8em;
  height: 3em;
  border-radius: 15px;
  color: white;
  background-color: #26282c;
  font-weight: 700;
  margin-right: 1em;
`;
