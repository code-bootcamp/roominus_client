import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1.5px solid #4a00e0e7;
  border-bottom: 1.5px solid #4a00e0e7;
  text-align: center;
  color: #999;
  font-size: 1.3em;

  @media ${breakPoints.tablet} {
    gap: 6em;
  }

  @media ${breakPoints.mobile} {
    gap: 1em;
    font-size: 1em;
  }
`;

const Flip = styled.div`
  height: 50px;
  overflow: hidden;

  @media ${breakPoints.mobile} {
    height: 40px;
  }

  > div > div {
    padding-bottom: 1em;
    padding-top: 0.5em;
    padding-left: 1em;
    padding-right: 1em;
    margin-bottom: 50px;
    display: inline-block;
    color: #26282c;
    @media ${breakPoints.mobile} {
      padding-top: 0.2em;
      padding-bottom: 1.8em;
      margin-bottom: 40x;
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

  @media ${breakPoints.tablet} {
    width: 15em;
  }

  @media ${breakPoints.mobile} {
    width: 12em;
  }
`;
const Contents = styled.div`
  text-align: left;
  white-space: nowrap;
  width: 100%;
`;

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
