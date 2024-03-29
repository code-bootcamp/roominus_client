import { gql } from "@apollo/client";

export const FETCH_THEMES_REVIEWS_USER = gql`
  query fetchThemeReviewsUser($page: Float = 1) {
    fetchThemeReviewsUser(page: $page) {
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

export const FETCH_THEMES_REVIEWS_USER_COUNT = gql`
  query fetchThemeReviewsUserCount {
    fetchThemeReviewsUserCount
  }
`;
