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
    font-size: 4em;
  }
`;
export const Error = styled.div`
  color: red;
  font-size: 1em;
`;
export const TabBtns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: 3em;
  @media ${breakPoints.mobile} {
    font-size: 2.3em;
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
  @media ${breakPoints.mobile} {
    width: 60%;
    height: 38em;
  }
`;

export const PhoneBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8em;
  @media ${breakPoints.mobile} {
    font-size: 2em;
    margin: auto;
  }
`;
export const Phone = styled.div`
  font-size: 1.2em;
`;
export const PhoneInput = styled.input`
  width: 100%;
  height: 2.5em;
  border: none;
  border-bottom: 1px solid #a3a8b7;
  outline: none;
  font-size: 1.3em;
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
`;

export const IDcheckBtn = styled.button`
  width: 140%;
  height: 3.5em;
  border-radius: 15px;
  border: none;
  background-color: #4a00e0e7;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(142, 45, 226, 1) 30%,
      rgba(74, 0, 224, 1) 100%
    );
  }
  font-weight: 500;
  @media ${breakPoints.mobile} {
    width: 140%;
    height: 3.5em;
    font-size: 2em;
  }
`;
