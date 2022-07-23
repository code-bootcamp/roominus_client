import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
  }
`;
export const Title = styled.h1`
  font-size: 2.5em;
  margin-top: 2em;
  @media ${breakPoints.mobile} {
    font-size: 3em;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 1em;
  @media ${breakPoints.mobile} {
    font-size: 1.3em;
  }
`;
export const TabBtns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: 3em;
  @media ${breakPoints.mobile} {
    font-size: 1.6em;
  }
`;

interface IClickedFirstProps {
  isClickedfirst: boolean;
}

export const TabFirst = styled.button`
  width: 45%;
  height: 3.5em;
  color: white;
  background-color: ${(props: IClickedFirstProps) =>
    props.isClickedfirst ? "#4a00e0e7" : "#6D737D99"};
  border-radius: 10px 10px 0px 0px;
  border: none;
  cursor: pointer;
`;

interface IClickedSecondProps {
  isClickedsecond: boolean;
}
export const TabSecond = styled.button`
  width: 45%;
  height: 3.5em;
  color: white;
  background-color: ${(props: IClickedSecondProps) =>
    props.isClickedsecond ? "#4a00e0e7" : "#6D737D99"};
  border-radius: 10px 10px 0px 0px;
  border: none;
  cursor: pointer;
`;

export const Form = styled.form`
  width: 60%;
  height: 28em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
`;
export const NameBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  margin-bottom: 2em;
`;
export const Name = styled.div`
  font-size: 1.2em;
  @media ${breakPoints.mobile} {
    font-size: 1.8em;
  }
`;
export const NameInput = styled.input`
  width: 100%;
  height: 2.5em;
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
  font-size: 1.3em;
  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const PhoneNoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;
export const PhoneNo = styled.div`
  font-size: 1.2em;
  @media ${breakPoints.mobile} {
    font-size: 1.8em;
  }
`;
export const PhoneNoInput = styled.input`
  width: 100%;
  height: 2.5em;
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
  font-size: 1.3em;
  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1em;
`;
export const ImportantInfos = styled.span`
  margin-left: 0.3em;
  font-size: 1.4em;
  color: red;
  @media ${breakPoints.mobile} {
    font-size: 2em;
  }
`;
