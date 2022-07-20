import CommunityDetail from "../../../src/components/units/community/detail/CommunityDetail.container";
import styled from "@emotion/styled";
import useAuth from "../../../src/components/commons/hooks/useAuth";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function CommunityDetailPage() {
  useAuth();
  return (
    <Wrapper>
      <CommunityDetail />
    </Wrapper>
  );
}
