import { gql } from "@apollo/client";

export const CREATE_THEME_MENU = gql`
  mutation createThemeMenu($createThemeMenuInput: CreateThemeMenuInput!) {
    createThemeMenu(createThemeMenuInput: $createThemeMenuInput) {
      id
      reservation_time
      people_number
      price
      cafe {
        name
      }
      theme {
        title
      }
    }
  }
`;
export const FETCH_THEMES = gql`
  query fetchThemes {
    fetchThemes {
      id
      title
    }
  }
`;
