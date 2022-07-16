import { gql } from "@apollo/client";

export const CREATE_BOARD_REVIEW = gql`
  mutation createBoardreview($createBoardreviewInput: CreateBoardreviewInput!) {
    createBoardreview(createBoardreviewInput: $createBoardreviewInput) {
      id
      content
    }
  }
`;
