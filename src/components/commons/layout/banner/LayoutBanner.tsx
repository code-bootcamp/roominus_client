import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export default function LayoutBanner() {
  const BannerImage = styled.div`
    width: 100vw;
    height: 14.38em;
    position: relative;
    left: calc(-50vw + 50%);
    background-image: url("/img/layout/banner.png");

    @media ${breakPoints.mobile} {
      height: 6.25em;
    }
  `;
  return (
    <>
      <BannerImage></BannerImage>
    </>
  );
}
