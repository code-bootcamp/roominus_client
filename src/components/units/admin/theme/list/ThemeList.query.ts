import { gql } from "@apollo/client";

export const FETCH_THEMES_ALL = gql`
  query {
    fetchThemesAll {
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
