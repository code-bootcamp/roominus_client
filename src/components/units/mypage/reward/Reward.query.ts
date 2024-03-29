import { gql } from "@apollo/client";

export const FETCH_PAYMENTS = gql`
  query fetchPayments($page: Float = 1) {
    fetchPayments(page: $page) {
      id
      price
      imp_uid
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
      }
    }
  }
`;

export const FETCH_PAYMENTS_COUNT = gql`
  query fetchPaymentsCount {
    fetchPaymentsCount
  }
`;
