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

  width: 40em;

  @media ${breakPoints.tablet} {
    width: 25em;
  }

  @media ${breakPoints.mobile} {
    width: 25em;
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
`;

const ThemeTitle = styled.h1`
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

const ThemeCafe = styled.span`
  color: darkgray;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

const ThemeSub = styled.h3`
  font-style: oblique;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    font-size: 0.9em;
  }
`;

const RateBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  padding: 0.5em 0em 0.5em 0em;

  & span {
    font-size: 1.2em;
    margin-right: 0.1em;
  }
`;

const AgeBox = styled.div`
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

export default function ReservationThemeInfo(props: any) {
  return (
    <>
      <ImageInfoBox>
        <ImageBox>
          <Image src={props.data?.fetchThemeMenus[0]?.theme?.mainImg} />
        </ImageBox>
        <InfoBox>
          <ThemeTitleBox>
            <ThemeTitle>
              {props.data?.fetchThemeMenus[0]?.theme?.title}
            </ThemeTitle>
            <span>|</span>
            <ThemeCafe>
              {props.data?.fetchThemeMenus[0]?.cafe.address}{" "}
              {props.data?.fetchThemeMenus[0]?.cafe.name}
            </ThemeCafe>
          </ThemeTitleBox>

          <ThemeSub>
            {props.data?.fetchThemeMenus[0]?.theme?.intro_title}
          </ThemeSub>
          <ThemeSub>
            {props.data?.fetchThemeMenus[0]?.theme?.intro_content}
          </ThemeSub>
          <RateBox>
            <span>난이도 :</span>
            <Rate
              disabled
              defaultValue={props.data?.fetchThemeMenus[0]?.theme?.rank}
            />
          </RateBox>
          <AgeBox>
            <span>
              {props.data?.fetchThemeMenus[0]?.theme?.agelimit}세 이상 이용가능
            </span>
          </AgeBox>
        </InfoBox>
      </ImageInfoBox>
    </>
  );
}
