import { gql } from "@apollo/client";

export const CREATE_THEME = gql`
  mutation createTheme(
    $cafeName: String!
    $genreName: String!
    $createThemeInput: CreateThemeInput!
  ) {
    createTheme(
      cafeName: $cafeName
      genreName: $genreName
      createThemeInput: $createThemeInput
    ) {
      id
      title
      rank
      intro_title
      intro_content
      agelimit
      like
      mainImg
      cafe {
        id
        name
        phone
        intro_content
        address
        address_detail
        coordinate
        users {
          id
          isserviceprovider
          name
          phone
          email
          point
          cafes
        }
      }
      genre {
        id
        name
      }
    }
  }
`;
