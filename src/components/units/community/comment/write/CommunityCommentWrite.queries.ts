import { gql } from "@apollo/client";

export const CREATE_BOARD_REVIEW = gql`
  mutation createBoardreview($createBoardreviewInput: CreateBoardreviewInput!) {
    createBoardreview(createBoardreviewInput: $createBoardreviewInput) {
      id
      content
      # board {
      #   id
      # }
    }
  }
`;

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: String!) {
    fetchBoardComments(boardId: $boardId) {
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
