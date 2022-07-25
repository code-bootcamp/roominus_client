import { gql } from "@apollo/client";

export const FETCH_THEME = gql`
  query fetchTheme($themeId: String!) {
    fetchTheme(themeId: $themeId) {
      id
      title
      rank
      intro_title
      intro_content
      agelimit
      peoplelimit
      clearTime
      like
      mainImg
      genre {
        name
      }
      likeUsers {
        userId
      }
    }
  }
`;

export const CREATE_LIKE_THEME = gql`
  mutation createLikeTheme($themeId: String!) {
    createLikeTheme(themeId: $themeId)
  }
`;
