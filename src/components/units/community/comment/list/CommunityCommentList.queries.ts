import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($page: Float!, $boardId: String!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      boardreview {
        id
        content
        createdAt
      }
      user {
        name
      }
    }
  }
`;

export const DELETE_BOARD_REVIEW = gql`
  mutation deleteBoardreview($id: String!) {
    deleteBoardreview(id: $id)
  }
`;
