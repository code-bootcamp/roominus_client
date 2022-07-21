import { gql } from "@apollo/client";

export const CREATE_THEME = gql`
  mutation createTheme(
    $cafeName: String!
    $genreName: String!
    $createThemeInput: CreateThemeInput!
  ) {
    createTheme(
      cafeName: $cafeName
      genreName: $genreName
      createThemeInput: $createThemeInput
    ) {
      id
      title
      rank
      intro_title
      intro_content
      agelimit
      like
      mainImg
    }
  }
`;
export const UPDATE_THEME = gql`
  mutation updateTheme(
    $themeId: String!
    $updateThemeInput: UpdateThemeInput!
  ) {
    updateTheme(themeId: $themeId, updateThemeInput: $updateThemeInput) {
      id
      title
      rank
      intro_title
      intro_content
      agelimit
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
export const FETCH_THEME = gql`
  query fetchTheme($themeId: String!) {
    fetchTheme(themeId: $themeId) {
      id
      title
      rank
      intro_title
      intro_content
      agelimit
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
