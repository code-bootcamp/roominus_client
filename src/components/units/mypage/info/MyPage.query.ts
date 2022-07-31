import { gql } from "@apollo/client";

export const FETCH_RESERVATIONS_USER = gql`
  query fetchReservationsUser {
    fetchReservationsUser {
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
      imp_uid
      price
      usepoint
      reservation {
        reservation_date
        theme_menu {
          theme {
            title
          }
        }
      }
      user {
        point
        name
      }
    }
  }
`;
