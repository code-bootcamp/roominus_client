import CommunityDetail from "../../../src/components/units/community/detail/CommunityDetail.container";
import styled from "@emotion/styled";
// import CommunityCommentWrite from "../../../src/components/units/community/comment/Write/CommunityCommentWrite.container";
// import CommunityList from "../../../src/components/units/community/comment/CommunityComment.container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

// const Comment = styled.div`
// width: 80%;
//   display: flex;
//   flex-direction: column;
// `;

export default function CommunityDetailPage() {
  return (
    <Wrapper>
      <CommunityDetail />
      {/* <Comment>
        <CommunityCommentWrite />
        <CommunityList />
      </Comment> */}
    </Wrapper>
  );
}
