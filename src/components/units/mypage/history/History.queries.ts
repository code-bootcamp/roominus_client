import { gql } from "@apollo/client";

export const FETCH_RESERVATIONS_USER = gql`
  query fetchReservationsUser {
    fetchReservationsUser {
      id
    }
  }
`;

export const FETCH_RESERVATIONS_USER_COUNT = gql`
  query fetchReservationUserCount {
    fetchReservationUserCount
  }
`;
