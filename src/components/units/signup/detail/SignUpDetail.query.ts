import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      name
      email
    }
  }
`;

export const SEND_TOTKEN_TO_PHONE = gql`
  mutation sendTotkentoPhone($phone: String!) {
    sendTotkentoPhone(phone: $phone)
  }
`;
export const CHECK_INPUT_TOKEN = gql`
  mutation checkinputToken($phone: String!, $tokenInput: String!) {
    checkinputToken(phone: $phone, tokenInput: $tokenInput)
  }
`;
