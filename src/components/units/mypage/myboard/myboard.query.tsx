import { gql } from "@apollo/client";

export const FETCH_BOARDS_USER = gql`
  query fetchBoardsUser {
    fetchBoardsUser {
      id
      title
      createdAt
      like
      view
    }
  }
`;

export const FETCH_BOARDS_USER_COUNT = gql`
  query fetchBoardsUserCount {
    fetchBoardsUserCount
  }
`;
