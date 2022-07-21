import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser($phone: String!) {
    fetchUser(phone: $phone) {
      email
    }
  }
`;
