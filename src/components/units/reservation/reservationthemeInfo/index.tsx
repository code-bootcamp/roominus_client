import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

const ImageInfoBox = styled.div`
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
const ImageBox = styled.div`
  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
  }
`;

const Image = styled.img`
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

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-bottom: 1px solid darkgray;
  width: 100%;

  @media ${breakPoints.tablet} {
    width: 25em;
  }

  @media ${breakPoints.mobile} {
    width: 25em;
  }

  & h2 {
    font-style: oblique;

    @media ${breakPoints.tablet} {
    }

    @media ${breakPoints.mobile} {
      font-size: 0.9em;
    }
  }
`;

const ThemeTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  font-size: 1.3em;

  @media ${breakPoints.mobile} {
    font-size: 1.1em;
  }

  & h1 {
    font-size: 2.5em;
    font-family: "GowunDodum-Regular";

    @media ${breakPoints.tablet} {
      font-size: 1.5em;
    }
    @media ${breakPoints.mobile} {
      font-size: 1.3em;
      width: auto;
    }
  }
`;

const ThemeCafe = styled.span`
  color: darkgray;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

const RateBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  padding: 0.5em 0em 0.5em 0em;
  margin-top: 2em;
  border-top: 1px solid darkgray;

  & span {
    font-size: 1.2em;
    margin-right: 0.1em;
  }
`;

const LimitBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.1em;
  padding-top: 1em;

  @media ${breakPoints.tablet} {
    font-size: 1em;
  }
  @media ${breakPoints.mobile} {
    font-size: 1em;
  }

  & span {
    color: red;
  }
`;

export default function ReservationThemeInfo(props: any) {
  return (
    <>
      <ImageInfoBox>
        <ImageBox>
          <Image src={props.data?.fetchThemeMenus[0]?.theme?.mainImg} />
        </ImageBox>
        <InfoBox>
          <ThemeTitleBox>
            <h1>{props.data?.fetchThemeMenus[0]?.theme?.title}</h1>
            <span>|</span>
            <ThemeCafe>
              {props.data?.fetchThemeMenus[0]?.cafe.address}{" "}
              {props.data?.fetchThemeMenus[0]?.cafe.name}
            </ThemeCafe>
          </ThemeTitleBox>

          <h2>{props.data?.fetchThemeMenus[0]?.theme?.intro_title}</h2>
          <h3>{props.data?.fetchThemeMenus[0]?.theme?.intro_content}</h3>
          <RateBox>
            <span>난이도 :</span>
            <Rate
              disabled
              defaultValue={props.data?.fetchThemeMenus[0]?.theme?.rank}
            />
          </RateBox>
          <LimitBox>
            <h3>
              이용시간 : {props.data?.fetchThemeMenus[0]?.theme?.clearTime}분
            </h3>
            <h3>
              수용 인원 : 1 ~{" "}
              {props.data?.fetchThemeMenus[0]?.theme?.peoplelimit}명
            </h3>
            <span>
              {props.data?.fetchThemeMenus[0]?.theme?.agelimit}세 이상 이용가능
            </span>
          </LimitBox>
        </InfoBox>
      </ImageInfoBox>
    </>
  );
}
