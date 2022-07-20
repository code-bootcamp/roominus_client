import { gql } from "@apollo/client";

export const CREATE_BOARD_SECOND_REVIEW = gql`
  mutation createBoardsecondreview(
    $boardReviewId: String!
    $createBoardsecondreviewInput: CreateBoardsecondreviewInput!
  ) {
    createBoardsecondreview(
      boardReviewId: $boardReviewId
      createBoardsecondreviewInput: $createBoardsecondreviewInput
    ) {
      id
      content
    }
  }
`;

export const FETCH_BOARD_REVIEW_COMMENTS = gql`
  query fetchBoardReviewComments($boardreviewId: String!) {
    fetchBoardReviewComments(boardreviewId: $boardreviewId) {
      id
      content
    }
  }
`;
