import { gql } from "@apollo/client";

export const FETCH_RESERVATIONSUSER = gql`
  query fetchReservationsUser($userId: String!) {
    fetchReservationsUser(userId: $userId!) {
      id
      reservation_date
      memo
      status
      cafe {
        name
      }
      theme_menu{
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
