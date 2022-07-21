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

export const FETCH_REVIEW_COMMENTS = gql`
  query fetchReviewComments($boardreviewId: String!) {
    fetchReviewComments(boardreviewId: $boardreviewId) {
      id
      content
    }
  }
`;

export const UPDATE_BOARD_SECOND_REVIEW = gql`
  mutation udpateBoardsecondreview(
    $secondReviewId: String!
    $updateBoardSecondReviewInput: UpdateBoardSecondReviewInput!
  ) {
    udpateBoardsecondreview(
      secondReviewId: $secondReviewId
      updateBoardSecondReviewInput: $updateBoardSecondReviewInput
    ) {
      id
      content
    }
  }
`;
