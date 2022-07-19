import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      id
      title
      mainImg
      like
      user {
        name
      }
    }
  }
`;
