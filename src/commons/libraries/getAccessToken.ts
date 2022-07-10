import { GraphQLClient } from "graphql-request";
import { gql } from "@apollo/client";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient("", { credentials: "include" });
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
