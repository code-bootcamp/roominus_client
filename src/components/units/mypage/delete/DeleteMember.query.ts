import { gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation deleteUser($email: String!) {
    deleteUser(email: $email)
  }
`;
