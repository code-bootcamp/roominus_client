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
  font-size: 1.56em;
  font-weight: 700;
  padding-bottom: 0.5em;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 5em;
    font-size: 1.3em;
  }
`;

export const ImageInfoBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Left = styled(LeftOutlined)``;

export const ImageBox = styled.div`
  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 27em;
  height: 35em;
  border-radius: 15px;
  box-shadow: 7px 7px 39px rgba(202, 136, 217, 0.25);

  @media ${breakPoints.tablet} {
    width: 18em;
  }

  @media ${breakPoints.mobile} {
    width: 13em;
    height: 17em;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;

  width: 40em;

  @media ${breakPoints.tablet} {
    width: 25em;
  }

  @media ${breakPoints.mobile} {
    width: 25em;
  }
`;

export const ThemeTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  font-size: 1.3em;

  @media ${breakPoints.mobile} {
    font-size: 1.1em;
  }
`;

export const ThemeTitle = styled.h1`
  font-size: 2.5em;
  font-family: "GowunDodum-Regular";

  @media ${breakPoints.tablet} {
    font-size: 1.5em;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.3em;
    width: auto;
  }
`;

export const ThemeCafe = styled.span`
  color: darkgray;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

export const ThemeSub = styled.h3`
  font-style: oblique;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    font-size: 0.9em;
  }
`;

export const RateBox = styled.div`
  padding-bottom: 1em;
  display: flex;
  justify-content: flex-end;
`;

export const ageBox = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.1em;
  color: red;

  @media ${breakPoints.tablet} {
    font-size: 1em;
  }
  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 2em;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 1px solid darkgray;
  padding-top: 1.5em;
  font-weight: 700;

  width: 100%;
  font-size: 2em;

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
  border: 1px solid darkgray;
  padding: 1em;
  width: 100%;
`;

export const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5em;
  font-size: 1.3em;
  font-weight: 700;
  gap: 0.5em;
`;
