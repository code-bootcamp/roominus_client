import { gql } from "@apollo/client";

export const CREATE_THEME_REVIEW = gql`
  mutation createThemeReview(
    $themeId: String!
    $createThemeReviewInput: CreateThemeReviewInput!
  ) {
    createThemeReview(
      themeId: $themeId
      createThemeReviewInput: $createThemeReviewInput
    ) {
      id
      content
      # user {
      #   name
      # }
    }
  }
`;

export const FETCH_THEME_REVIEWS = gql`
  query fetchThemeReviews($themeId: String!) {
    fetchThemeReviews(themeId: $themeId) {
      id
      clear
      rank
      content
      createdAt
      # user {
      #   name
      # }
    }
  }
`;
