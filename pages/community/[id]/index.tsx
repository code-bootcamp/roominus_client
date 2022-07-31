import CommunityDetail from "../../../src/components/units/community/detail/CommunityDetail.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function CommunityDetailPage() {
  return (
    <Wrapper>
      <CommunityDetail />
    </Wrapper>
  );
}
