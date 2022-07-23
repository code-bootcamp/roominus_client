import { gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation deleteUser($email: String!) {
    deleteUser(email: $email)
  }
`;
export const LOG_OUT = gql`
  mutation logout {
    logout
  }
`;
