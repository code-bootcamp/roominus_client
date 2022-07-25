import { gql } from "@apollo/client";

export const CREATE_RESERVATION_THEME_MENU = gql`
  mutation createThemeMenu($createThemeMenuInput: CreateThemeMenuInput!) {
    createThemeMenu(createThemeMenuInput: $createThemeMenuInput) {
      id
      reservation_time
      people_number
      price
      cafe
      theme
    }
  }
`;

export const FETCH_THEMES_ALL = gql`
  query fetchThemesAll {
    fetchThemesAll {
      id
      title
    }
  }
`;
