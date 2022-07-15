import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
      title
      content
      # boardTags {

      # }
      mainImg
      # user {
      #   name
      # }
    }
  }
`;
