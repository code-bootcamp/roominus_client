import ThemeCommentListUIItem from "./ThemeCommentList.presenterItem";
import * as S from "./ThemeCommentList.styles";
import InfiniteScroll from "react-infinite-scroller";
import {
  IFetchThemeReviewsData,
  IThemeCommentListUIProps,
} from "./ThemeCommentList.types";
import { v4 as uuidv4 } from "uuid";

export default function ThemeCommentListUI(props: IThemeCommentListUIProps) {
  return (
    <S.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadMore}
        hasMore={true}
        useWindow={false}
        style={{
          width: "100%",
        }}
      >
        <S.CommentList>
          {props.data?.fetchThemeReviews.map(
            (el: IFetchThemeReviewsData, index: number) => (
              <div key={uuidv4()}>
                <ThemeCommentListUIItem el={el} />
              </div>
            )
          )}
        </S.CommentList>
      </InfiniteScroll>
    </S.Wrapper>
  );
}
