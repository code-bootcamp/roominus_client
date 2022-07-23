import { gql } from "@apollo/client";

export const FETCH_RESERVATIONS_USER = gql`
  query fetchReservationsUser($page: Float = 1) {
    fetchReservationsUser(page: $page) {
      id
    }
  }
`;

export const FETCH_RESERVATIONS_USER_COUNT = gql`
  query fetchReservationUserCount {
    fetchReservationUserCount
  }
`;
