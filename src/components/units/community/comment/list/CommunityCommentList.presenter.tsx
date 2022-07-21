import CommunityCommentEdit from "../edit/CommunityCommentEdit.container";
import InfiniteScroll from "react-infinite-scroller";
import {
  IBoardreviewEl,
  ICommunityCommentListUIProps,
} from "./CommunityCommentList.types";

export default function CommunityCommentListUI(
  props: ICommunityCommentListUIProps
) {
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={true}
      >
        {props.data?.fetchBoardComments.boardreview.map(
          (el: IBoardreviewEl) => (
            <div key={el.id}>
              <CommunityCommentEdit
                key={el.id}
                el={el}
                onClickDelete={props.onClickDelete}
              />
            </div>
          )
        )}
      </InfiniteScroll>
    </div>
  );
}
