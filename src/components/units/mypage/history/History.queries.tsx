import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
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
        id
        resevation_time
        people_number
        price
        theme {
          title
        }
      }
      payment {
        price
      }
    }
  }
`;
