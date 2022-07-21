import { gql } from "@apollo/client";

export const FETCH_REVIEW_COMMENTS = gql`
  query fetchReviewComments($boardreviewId: String!) {
    fetchReviewComments(boardreviewId: $boardreviewId) {
      id
      content
      boardsecondreview {
        id
        content
        createdAt
        user {
          name
        }
      }
    }
  }
`;

export const DELETE_BOARD_SECOND_REVIEW = gql`
  mutation deleteBoardsecondreview($secondReviewId: String!) {
    deleteBoardsecondreview(secondReviewId: $secondReviewId)
  }
`;
