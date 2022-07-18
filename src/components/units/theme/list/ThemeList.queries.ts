import { gql } from "@apollo/client";

export const FETCH_THEMES = gql`
  query fetchThemes {
    fetchThemes {
      id
      title
      rank
      intro_title
      intro_content
      agelimit
      like
      mainImg
      genre {
        name
      }
    }
  }
`;

export const FETCH_GENRES = gql`
  query fetchGenres {
    fetchGenres {
      id
      name
    }
  }
`;
