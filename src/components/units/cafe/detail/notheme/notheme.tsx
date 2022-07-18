import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

const SorryBox = styled.div`
  width: 100%;
  height: 42em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${breakPoints.mobile} {
    height: 30em;
  }
`;

const Sorry = styled.img`
  margin-bottom: 1.5em;
`;

const SorryTitle = styled.div`
  font-size: 1.5em;
`;

export default function NoTheme() {
  return (
    <SorryBox>
      <Sorry src="/img/reservation/sorry.webp" />
      <SorryTitle>앗! 현재는 테마 준비 중입니다.</SorryTitle>
    </SorryBox>
  );
}
