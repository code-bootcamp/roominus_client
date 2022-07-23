import { gql } from "@apollo/client";

export const FETCH_USER_LIKE_THEMES = gql`
  query fetchUserLikeThemes($page: Float = 1) {
    fetchUserLikeThemes(page: $page) {
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
