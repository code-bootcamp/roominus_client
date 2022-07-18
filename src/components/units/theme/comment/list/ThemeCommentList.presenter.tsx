import ThemeCommentListUIItem from "./ThemeCommentList.presenterItem";
import * as S from "./ThemeCommentList.styles";
import InfiniteScroll from "react-infinite-scroller";
import {
  IFetchThemeReviewsData,
  IThemeCommentListUIProps,
} from "./ThemeCommentList.types";

export default function ThemeCommentListUI(props: IThemeCommentListUIProps) {
  return (
    <S.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadMore}
        hasMore={true}
        // loader={<div key={30}>열심히 불러오는 중</div>}
        useWindow={false}
        style={{
          width: "100%",
        }}
      >
        <S.CommentList>
          {props.data?.fetchThemeReviews.map(
            (el: IFetchThemeReviewsData, index: number) => (
              <div key={el.id}>
                <ThemeCommentListUIItem setIsEdit={props.setIsEdit} el={el} />
              </div>
            )
          )}
        </S.CommentList>
      </InfiniteScroll>
    </S.Wrapper>
  );
}
