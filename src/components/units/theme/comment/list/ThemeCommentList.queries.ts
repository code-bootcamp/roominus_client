import { gql } from "@apollo/client";

export const FETCH_THEME_REVIEWS = gql`
  query fetchThemeReviews($themeId: String!) {
    fetchThemeReviews(themeId: $themeId) {
      id
      clear
      rank
      content
      createdAt
      star
      user {
        id
        name
        isserviceprovider
      }
    }
  }
`;

export const DELETE_THEME_REVIEW = gql`
  mutation deleteThemeReview($themeReviewId: String!) {
    deleteThemeReview(themeReviewId: $themeReviewId)
  }
`;
