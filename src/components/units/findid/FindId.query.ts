import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser($phone: String!) {
    fetchUser(phone: $phone) {
      email
    }
  }
`;
export const FETCH_SOCIAL_USER = gql`
  query fetchSocialUser($phone: String!) {
    fetchSocialUser(phone: $phone) {
      email
    }
  }
`;
