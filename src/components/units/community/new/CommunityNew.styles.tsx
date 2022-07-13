import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 100%;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding: 2em 0em;
  /* background-color: red; */
`;

export const Title = styled.h1`
  font-size: 2em;
  /* align-self: center; */
`;

export const HalfBox = styled.div`
  width: 100%;
  /* height: 25em; */
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: green; */

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  }
`;

export const Picture = styled.img`
  width: 60%;
  /* height: 25em; */
  margin-right: 2em;
  border-radius: 10px;
  /* background-color: #c2c2c2; */

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const HalfRightBox = styled.div`
  width: 100%;
  /* height: 25em; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: yellow; */

  @media ${breakPoints.mobile} {
    margin-top: 2em;
  }
`;

export const InfoBox = styled.div`
  width: 100%;

  /* height: 6em; */
  /* margin-bottom: 2em; */
  /* background-color: pink; */
`;

export const InfoTitle = styled.h3``;

export const Error = styled.div`
  font-size: 0.8em;
  margin-bottom: 0.5em;
  color: red;
`;

export const DropZoneInfoBox = styled.div`
  /* height: 100%; */
`;

export const DropBox = styled.div`
  width: 100%;
  height: 8em;
  border: 1px solid #a3a8b7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(217, 214, 224, 0.25);
`;

export const Essential = styled.span`
  color: red;
`;

export const InfoInput = styled.input`
  width: 100%;
  height: 3em;
  border: none;
  padding: 0.5em;
  border: 1px solid #a3a8b7;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 4px rgba(217, 214, 224, 0.25);
  margin-bottom: 1em;
`;

export const ContentsInfoBox = styled.div`
  width: 100%;
  /* height: 100%; */
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  /* background-color: pink; */
`;

export const WebEditor = styled.div`
  width: 100%;
  height: 20em;
  padding: 1em;
  border: 1px solid #a3a8b7;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(217, 214, 224, 0.25);
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
  /* background-color: orange; */
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
