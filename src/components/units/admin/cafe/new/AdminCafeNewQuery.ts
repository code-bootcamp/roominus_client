import { gql } from "@apollo/client";

export const CREATE_CAFE = gql`
  mutation createCafe($createCafeInput: CreateCafeInput!) {
    createCafe(createCafeInput: $createCafeInput) {
      id
      name
      phone
      intro_content
      address
      address_detail
      mainImg
      # subImgs
      # users
    }
  }
`;
