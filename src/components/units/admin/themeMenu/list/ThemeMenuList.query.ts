import { gql } from "@apollo/client";

export const FETCH_THEME_MENUS = gql`
  query fetchThemeMenus($themeId: String!) {
    fetchThemeMenus(themeId: $themeId) {
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
