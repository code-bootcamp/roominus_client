import styled from "@emotion/styled";

export const Container = styled.main`
  width: 100%;
`;

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
  width: 80%;
  height: 5em;
  margin: auto;
  background-color: pink;
`;

export const ButtonBox = styled.div`
  height: 8em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
