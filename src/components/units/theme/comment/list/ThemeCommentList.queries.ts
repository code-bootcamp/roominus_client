import { gql } from "@apollo/client";

export const FETCH_THEME_REVIEWS = gql`
  query fetchThemeReviews($themeId: String!) {
    fetchThemeReviews(themeId: $themeId) {
      id
      clear
      rank
      content
      createdAt
      user {
        name
        isserviceprovider
      }
    }
  }
`;
