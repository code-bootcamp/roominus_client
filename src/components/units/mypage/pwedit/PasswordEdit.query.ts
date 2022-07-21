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
