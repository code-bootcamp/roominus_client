import { gql } from "@apollo/client";

export const FETCH_THEMES = gql`
  query fetchThemes {
    fetchThemes {
      id
      title
      cafe {
        id
        name
      }
    }
  }
`;

export const FETCH_THEME_MENUS = gql`
  query fetchThemeMenus($themeId: String!) {
    fetchThemeMenus(themeId: $themeId) {
      id
      reservation_time
      price
      people_number
      price
      cafe {
        name
        phone
        id
      }
      theme {
        mainImg
        title
        intro_title
        intro_content
        agelimit
        rank
        like
      }
      cafe {
        name
        phone
        address
        address_detail
      }
    }
  }
`;
