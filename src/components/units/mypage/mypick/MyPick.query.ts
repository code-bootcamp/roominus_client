import { gql } from "@apollo/client";

export const FETCH_USER_LIKE_THEMES = gql`
  query fetchUserLikeThemes {
    fetchUserLikeThemes {
      theme {
        id
        title
        mainImg
        cafe {
          name
        }
      }
    }
  }
`;
export const FETCH_USER_LIKE_THEMES_COUNT = gql`
  query fetchUserLikeThemesCount {
    fetchUserLikeThemesCount
  }
`;
