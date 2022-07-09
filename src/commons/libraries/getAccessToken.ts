import { gql, GraphQLClient } from "graphql-request";
const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
export async function getAccessToken() {
  // 2-1. refreshToken으로 accessToken 재발급

  try {
    const graphQLClient = new GraphQLClient("https://wawoong.shop/graphql", {
      credentials: "include",
    });
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
