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
