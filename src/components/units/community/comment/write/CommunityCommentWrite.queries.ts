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

export const FETCH_BOARD_REVIEW = gql`
  query fetchBoardreview($id: String!) {
    fetchBoardreview(id: $id) {
      id
      content
      board {
        id
      }
    }
  }
`;
