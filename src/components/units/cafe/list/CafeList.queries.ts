import { gql } from "@apollo/client";

export const FETCH_CAFES = gql`
  query fetchCafes($address: String, $page: Float) {
    fetchCafes(address: $address, page: $page) {
      id
      name
      phone
      address
      mainImg
    }
  }
`;

export const FETCH_CAFES_COUNT = gql`
  query fetchCafesCount {
    fetchCafesCount
  }
`;
