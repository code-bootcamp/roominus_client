import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: String!) {
    fetchBoardComments(boardId: $boardId) {
      boardreview {
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

export const DELETE_BOARD_REVIEW = gql`
  mutation deleteBoardreview($boardReviewId: String!) {
    deleteBoardreview(boardReviewId: $boardReviewId)
  }
`;
