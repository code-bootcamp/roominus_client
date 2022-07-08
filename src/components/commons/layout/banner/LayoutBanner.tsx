import styled from "@emotion/styled";

export default function LayoutBanner() {
  const BannerImage = styled.img`
    width: 100vw;
    height: 230px;
    position: relative;
    left: calc(-50vw + 50%);
  `;
  return (
    <>
      <BannerImage src="/img/layout/banner.png" />
    </>
  );
}
