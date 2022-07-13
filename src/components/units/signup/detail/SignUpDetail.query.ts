import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $userid: String!
    $password: String!
    $name: String!
    $phone: String!
    $email: String!
  ) {
    createUser(
      userid: $userid
      password: $password
      name: $name
      phone: $phone
      email: $email
    ) {
      id
      isserviceprovider
      userid
      name
      phone
      email
      nickname
      point
      createdAt
      cafes
    }
  }
`;
