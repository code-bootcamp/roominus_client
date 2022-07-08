import styled from "@emotion/styled";

export const Container = styled.main`
  width: 100%;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.section`
  width: 85%;
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
  /* padding: 0em 2em; */
  /* background-color: #f2ebf5; */
`;

export const HalfBox = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.img`
  width: 50em;
  height: 30em;
  margin-right: 2em;
  border-radius: 10px;
  background-color: gray;
`;

export const HalfRightBox = styled.div`
  /* background-color: yellow; */
  width: 100%;
`;

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const InfoTitle = styled.h3``;

export const DropBox = styled.div`
  width: 100%;
  height: 12.5em;
  border: 1px solid #a3a8b7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Essential = styled.span`
  color: red;
`;

export const InfoInput = styled.input`
  height: 3em;
  border: none;
  padding: 0.5em;
  border: 1px solid #a3a8b7;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 4px rgba(217, 214, 224, 0.25);
`;

export const WebEditor = styled.div`
  width: 100%;
  height: 20em;
  padding: 1em;
  border: 1px solid #a3a8b7;
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
