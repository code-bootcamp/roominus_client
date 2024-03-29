/* eslint-disable no-unused-vars */
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
  userInfoState,
} from "../../../commons/store";

const FETCH_USER_LOGGEDIN = gql`
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

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const Auth = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    if (sessionStorage.getItem("#LL")) {
      Auth.toPromise().then(async (newAccessToken) => {
        setAccessToken(newAccessToken);
        const resultuserInfo = await client.query({
          query: FETCH_USER_LOGGEDIN,
          context: {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
            },
          },
        });
        const user = resultuserInfo.data?.fetchUserLoggedIn;

        setUserInfo(user);
      });
    }
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);

            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꿔치기
              },
            });

            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://wawoong.shop/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
