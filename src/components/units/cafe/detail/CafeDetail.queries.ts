import { gql } from "@apollo/client";

export const FETCH_CAFE = gql`
  query fetchCafe($cafeId: String!) {
    fetchCafe(cafeId: $cafeId) {
      id
      name
      phone
      intro_content
      address
      address_detail
      mainImg
    }
  }
`;

export const FETCH_THEMES_ON_THEME = gql`
  query fetchThemesOnTheme($cafeId: String!) {
    fetchThemesOnTheme(cafeId: $cafeId) {
      id
      title
      mainImg
    }
  }
`;
