import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  font-size: 1.3em;
  justify-content: space-around;
  border-top: 1.5px solid #4a00e0e7;
  border-bottom: 1.5px solid #4a00e0e7;
  text-align: center;

  @media ${breakPoints.tablet} {
    font-size: 1.1em;
  }

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

const Flip = styled.div`
  height: 50px;
  overflow: hidden;

  @media ${breakPoints.tablet} {
    height: 45px;
  }

  @media ${breakPoints.mobile} {
    height: 45px;
  }

  > div > div {
    padding-bottom: 0.7em;
    padding-left: 1em;
    margin-bottom: 3em;
    display: inline-block;
    color: #26282c;

    @media ${breakPoints.tablet} {
      padding-bottom: 1.7em;
    }

    @media ${breakPoints.mobile} {
      padding-bottom: 2.5em;
    }
  }

  div:first-child {
    animation: show 13s linear infinite;
  }

  div div {
  }

  div:first-child div {
    padding-top: 10px;
  }

  div:last-child div {
    padding-top: 2em;
  }

  @keyframes show {
    0% {
      margin-top: -250px;
    }
    5% {
      margin-top: -180px;
    }
    33% {
      margin-top: -180px;
    }
    38% {
      margin-top: -90px;
    }
    66% {
      margin-top: -90px;
    }
    71% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }
`;

const ContentBox = styled.div`
  width: 30em;

  @media ${breakPoints.mobile} {
    width: 13em;
  }
`;
const Contents = styled.div`
  text-align: left;
  width: 100%;
`;

const Date = styled.div``;

export default function Notice() {
  return (
    <Container>
      <Wrapper>
        <Flip>
          <div>
            <div>[안내]</div>
          </div>
          <div>
            <div>[안내]</div>
          </div>
          <div>
            <div>[공지]</div>
          </div>
        </Flip>
        <Flip>
          <ContentBox>
            <Contents>신용카드 무이자 할부 안내</Contents>
          </ContentBox>
          <ContentBox>
            <Contents>8월 3일 시스템 점검 안내</Contents>
          </ContentBox>
          <ContentBox>
            <Contents>8월 정기 휴무 안내</Contents>
          </ContentBox>
        </Flip>
        <Flip>
          <div>
            <div>2022-08-03</div>
          </div>
          <div>
            <div>2022-08-01</div>
          </div>
          <div>
            <div>2022-07-30</div>
          </div>
        </Flip>
      </Wrapper>
    </Container>
  );
}
