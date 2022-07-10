import styled from "@emotion/styled";

export default function LayoutBanner() {
  const BannerImage = styled.div`
    width: 100vw;
    height: 14.38em;
    position: relative;
    left: calc(-50vw + 50%);
    background: url("/img/layout/banner.png") center/cover;
  `;
  return (
    <>
      <BannerImage></BannerImage>
    </>
  );
}
