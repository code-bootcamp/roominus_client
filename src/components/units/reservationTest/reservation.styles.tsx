import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { LeftOutlined } from "@ant-design/icons";

export const NoBox = styled.div`
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
`;

export const Notice = styled.p`
  font-size: 1.3em;
`;
export const Container = styled.main`
  padding: 2em 0em 2em 0em;
  width: 100%;

  @media ${breakPoints.mobile} {
    padding: 0.5em;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3em;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const BackBox = styled.div`
  width: 100%;
  font-size: 1.3em;
  font-weight: 700;
  padding-bottom: 0.5em;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 1.1em;
  }

  & span {
    margin-left: 0.5em;
  }
`;

export const Left = styled(LeftOutlined)``;

export const Form = styled.form`
  width: 100%;
`;

export const FooterBox = styled.div`
  padding-top: 3em;
  display: flex;
  flex-direction: column;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3em;
  gap: 1em;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 1px solid darkgray;
  border-bottom: 1px solid darkgray;
  padding-top: 1.5em;
  padding-bottom: 1em;
  font-weight: 700;

  width: 100%;
  font-size: 1.8em;

  & h4 {
    color: red;
  }

  @media ${breakPoints.tablet} {
    font-size: 1.5em;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const InformationUse = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  padding-top: 1em;
  width: 100%;
`;

export const CheckBox = styled.div`
  display: flex;
  font-size: 1.3em;
  font-weight: 700;
  padding-bottom: 0.5em;
  gap: 0.5em;
`;
