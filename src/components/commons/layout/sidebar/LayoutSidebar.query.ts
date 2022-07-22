import { gql } from "@apollo/client";

export const LOG_OUT = gql`
  mutation logout {
    logout
  }
`;
export const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      email
      phone
      name
      point
    }
  }
`;
export const FETCH_SOCIAL_USER_LOGGED_IN = gql`
  query fetchSocialUserLoggedIn {
    fetchSocialUserLoggedIn {
      id
      email
      phone
    }
  }
`;
