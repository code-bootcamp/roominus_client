import { gql } from "@apollo/client";

export const FETCH_THEMES_ALL = gql`
  query fetchThemesAll {
    fetchThemesAll {
      id
      title
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
        peoplelimit
        rank
        clearTime
        # genre {
        #   name
        # }
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

export const FETCH_RESERVATIONS = gql`
  query fetchReservatoins($cafeId: String!, $reservationDate: String!) {
    fetchReservatoins(cafeId: $cafeId, reservationDate: $reservationDate) {
      id
      reservation_date
      theme_menu {
        reservation_time
      }
    }
  }
`;
