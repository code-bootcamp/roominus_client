import { gql } from "@apollo/client";

export const FETCH_BOARD_REVIEW_COMMENTS = gql`
  query fetchBoardReviewComments($boardreviewId: String!) {
    fetchBoardReviewComments(boardreviewId: $boardreviewId) {
      id
      content
    }
  }
`;
