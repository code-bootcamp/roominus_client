import { gql } from "@apollo/client";

export const FETCH_CAFES = gql`
  query fetchCafes {
    fetchCafes {
      id
      name
      phone
      address
      mainImg
    }
  }
`;

export const FETCH_THEMES = gql`
  query fetchThemes {
    fetchThemes {
      id
      title
      rank
      intro_title
      intro_content
      agelimit
      peoplelimit
      like
      mainImg
      genre {
        name
      }
    }
  }
`;
