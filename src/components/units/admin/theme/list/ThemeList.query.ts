import { gql } from "@apollo/client";

export const FETCH_THEMES = gql`
  query {
    fetchThemes {
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
