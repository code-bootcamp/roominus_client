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
      <Sorry src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990937/public/reservation/sorry_rlxzuu.webp" />
      <SorryTitle>앗! 현재 운영 중인 테마가 없습니다.</SorryTitle>
    </SorryBox>
  );
}
