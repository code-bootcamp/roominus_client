import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    Login(email: $email, password: $password)
  }
`;
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
export const SOCIAL_LOGIN = gql`
  mutation SocialLogin($email: String!, $phone: String!) {
    SocialLogin(email: $email, phone: $phone)
  }
`;
