import styled from "@emotion/styled";

const BannerImage = styled.div`
  width: 100vw;
  height: 14.38em;
  position: relative;
  left: calc(-50vw + 50%);
  background: url("/img/layout/banner.png") center/cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Line = styled.div`
  width: 24px;
  border-bottom: 1px solid white;
  margin-bottom: 10px;
`;
const EngMenu = styled.div`
  font-size: 28px;
`;

const KorMenu = styled.div`
  font-size: 52px;
`;

export default function LayoutBanner() {
  return (
    <>
      <BannerImage>
        <Wrapper>
          <Line />
          <EngMenu>Community</EngMenu>
          <KorMenu>커뮤니티</KorMenu>
        </Wrapper>
      </BannerImage>
    </>
  );
}
