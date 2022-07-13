import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($userid: String!, $password: String!) {
    Login(userid: $userid, password: $password){
        
    }
  }
`;
