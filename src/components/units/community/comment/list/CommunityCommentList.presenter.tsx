import CommunityCommentEdit from "../edit/CommunityCommentEdit.container";
import {
  IBoardreviewEl,
  ICommunityCommentListUIProps,
} from "./CommunityCommentList.types";
import styled from "@emotion/styled";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column-reverse;
`;

export default function CommunityCommentListUI(
  props: ICommunityCommentListUIProps
) {
  return (
    <Wrapper>
      {props.data?.fetchBoardComments.boardreview?.map((el: IBoardreviewEl) => (
        <div key={el.id}>
          <CommunityCommentEdit
            key={el.id}
            el={el}
            onClickDelete={props.onClickDelete}
          />
        </div>
      ))}
    </Wrapper>
  );
}
