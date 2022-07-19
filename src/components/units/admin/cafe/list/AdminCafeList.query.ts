import { gql } from "@apollo/client";

export const FETCH_CAFES = gql`
  query fetchCafes($address: String, $page: Float = 1) {
    fetchCafes(address: $address, page: $page) {
      id
      name
      phone
      address
      mainImg
    }
  }
`;
