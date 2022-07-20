import { gql } from "@apollo/client";

export const FETCH_THEMES_USER = gql`
  query fetchThemesUser {
    fetchThemesUser {
      id
      clear
      rank
      content
      star
      createdAt
      theme {
        title
        id
      }
    }
  }
`;
