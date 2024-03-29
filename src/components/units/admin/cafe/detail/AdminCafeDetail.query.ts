import { gql } from "@apollo/client";

export const DELETE_CAFE = gql`
  mutation deleteCafe($cafeId: String!) {
    deleteCafe(cafeId: $cafeId)
  }
`;

export const FETCH_CAFE = gql`
  query fetchCafe($cafeId: String!) {
    fetchCafe(cafeId: $cafeId) {
      id
      name
      phone
      intro_content
      address
      address_detail
      mainImg
    }
  }
`;
