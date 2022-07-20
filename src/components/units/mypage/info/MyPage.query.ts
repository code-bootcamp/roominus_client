import { gql } from "@apollo/client";

export const FETCH_RESERVATIONS_USER = gql`
  query fetchReservationsUser($userId: String!) {
    fetchReservationsUser(userId: $userId) {
      id
      reservation_date
      memo
      status
      cafe {
        name
      }
      theme_menu {
        reservation_time
        people_number
        price
        theme {
          title
        }
      }
    }
  }
`;

export const FETCH_PAYMENTS = gql`
  query fetchPayments {
    fetchPayments {
      id
      price
      usepoint
      reservation {
        reservation_date
      }
      user {
        point
      }
    }
  }
`;
