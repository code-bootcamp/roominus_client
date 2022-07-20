import CommunityCommentEdit from "../edit/CommunityCommentEdit.container";
import InfiniteScroll from "react-infinite-scroller";

export default function CommunityCommentListUI(props) {
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true || false}
        useWindow={true}
      >
        {props.data?.fetchBoardComments.boardreview.map((el) => (
          <div key={el.id}>
            <CommunityCommentEdit
              key={el.id}
              el={el}
              onClickDelete={props.onClickDelete}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
