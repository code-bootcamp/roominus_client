import { gql } from "@apollo/client";

export const FETCH_FIND_PASSWORD = gql`
  query fetchFindPassword($email: String!, $phone: String!) {
    fetchFindPassword(email: $email, phone: $phone) {
      id
    }
  }
`;
