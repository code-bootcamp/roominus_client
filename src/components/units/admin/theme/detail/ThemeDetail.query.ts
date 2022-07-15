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
      cafe {
        name
      }

      genre {
        name
      }
    }
  }
`;

export const DELETE_THEME = gql`
  mutation deleteTheme($themeId: String!) {
    deleteTheme(themeId: $themeId)
  }
`;
