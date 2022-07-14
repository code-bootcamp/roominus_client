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

export const UPDATE_THEME_REVIEW = gql`
  mutation updateThemeReview(
    $themeReviewId: String!
    $updateThemeReviewInput: UpdateThemeReviewInput!
  ) {
    updateThemeReview(
      themeReviewId: $themeReviewId
      updateThemeReviewInput: $updateThemeReviewInput
    ) {
      id
      clear
      rank
      content
      star
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
      star
      # user {
      #   name
      # }
    }
  }
`;
