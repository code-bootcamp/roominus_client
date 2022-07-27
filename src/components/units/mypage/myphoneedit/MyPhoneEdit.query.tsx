import { gql } from "@apollo/client";

export const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      name
      email
      point
      phone
    }
  }
`;
export const UPDATE_USER = gql`
  mutation updateUser($userId: String!, $updateUserInput: UpdateUserInput!) {
    updateUser(userId: $userId, updateUserInput: $updateUserInput) {
      name
    }
  }
`;

export const UPDATE_SOCIAL_USER = gql`
  mutation updateSocialUser(
    $userId: String!
    $updateUserInput: UpdateUserInput!
  ) {
    updateSocialUser(userId: $userId, updateUserInput: $updateUserInput) {
      name
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
