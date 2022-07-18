import { gql } from "@apollo/client";

export const FETCH_CAFES = gql`
  query fetchCafes {
    fetchCafes {
      id
      name
    }
  }
`;
