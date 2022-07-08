import styled from "@emotion/styled";

export const Container = styled.main`
  width: 100%;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 2em 0em;
  /* background-color: yellow; */
`;

export const Title = styled.h1`
  /* height: 5em; */
  font-size: 2em;
  align-self: center;
`;

export const InfoBackground = styled.div`
  width: 100%;
  padding: 2em 5em;
  background-color: #f2ebf5;
`;

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const InfoTitle = styled.h3``;

export const Essential = styled.span`
  color: red;
`;

export const InfoInput = styled.input`
  height: 3em;
  border: none;
  padding: 1em;
`;

export const WebEditor = styled.div`
  width: 100%;
  height: 20em;
  padding: 1em;
  background-color: white;
`;
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
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
