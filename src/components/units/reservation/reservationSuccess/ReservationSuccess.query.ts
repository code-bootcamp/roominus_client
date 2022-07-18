import { gql } from "@apollo/client";

export const FETCH_RESERVATION = gql`
  query fetchReservation($reservationId: String!) {
    fetchReservation(reservationId: $reservationId) {
      id
      reservation_date
      memo
      status
      user {
        name
      }
      cafe {
        name
      }
      theme_menu {
        id
        reservation_time
        people_number
        price
        theme {
          title
          mainImg
        }
      }
      payment {
        merchant_uid
      }
    }
  }
`;

export const DELETE_RESERVATION = gql`
  mutation deleteReservation($reservationId: String!, $merchantUid: String!) {
    deleteReservation(reservationId: $reservationId, merchantUid: $merchantUid)
  }
`;
