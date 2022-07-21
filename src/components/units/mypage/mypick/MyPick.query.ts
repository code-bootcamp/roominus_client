import { gql } from "@apollo/client";

export const FETCH_USER_LIKE_THEMES = gql`
  query fetchUserLikeThemes {
    fetchUserLikeThemes {
      theme {
        title
        like
      }
    }
  }
`;
