import { gql } from "@apollo/client";

export const FETCH_PAYMENTS = gql`
  query fetchPayments {
    fetchPayments {
      id
      # price
      # usepoint
      # reservation {
      #   reservation_date
      # }
      # user {
      #   point
      # }
    }
  }
`;
