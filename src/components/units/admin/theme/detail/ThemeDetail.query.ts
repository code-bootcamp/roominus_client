import { gql } from "@apollo/client";

export const FETCH_THEME = gql`
  query fetchTheme($title: String!) {
    fetchTheme(title: $title) {
      id
      title
      rank
      intro_title
      intro_content
      agelimit
      like
    }
  }
`;
