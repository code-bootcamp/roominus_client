import { gql } from "@apollo/client";

export const FETCH_RESERVATIONS = gql`
  query fetchReservatoins($cafeId: String!, $reservationDate: String!) {
    fetchReservatoins(cafeId: $cafeId, reservationDate: $reservationDate) {
      id
      reservation_date
      memo
      status
      user {
        name
        phone
      }
      theme_menu {
        id
        reservation_time
        people_number
        price
        # theme {
        #   title
        # }
      }
      payment {
        price
        usepoint
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
