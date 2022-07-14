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

export const CREATE_RESERVATION = gql`
  mutation createReservation(
    $cafeId: String!
    $userId: String!
    $themeMenuId: String!
    $createReservationInput: CreateReservationInput!
    $createPaymentInput: CreatePaymentInput!
  ) {
    createReservation(
      cafeId: $cafeId
      userId: $userId
      themeMenuId: $themeMenuId
      createReservationInput: $createReservationInput
      createPaymentInput: $createPaymentInput
    ) {
      _id
      reservation_date
      memo
      status
    }
  }
`;
