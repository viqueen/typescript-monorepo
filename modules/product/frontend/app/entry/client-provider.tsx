import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import type { NormalizedCacheObject } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { todoGateway } from "@monorepo-frontend/gateway-component";

interface ApolloClientProps {
  product: { key: string; gatewayUrl: string };
  token?: string;
}

const apolloClient = ({ token, product }: ApolloClientProps) => {
  const auth = setContext((_, { headers }) => {
    if (!token) return { headers: { ...headers } };
    return {
      headers: { ...headers, [`x-monorepo-${product.key}-token`]: token },
    };
  });
  const api = new HttpLink({
    credentials: "include",
    uri: `${product.gatewayUrl}/graphql-api`,
    useGETForQueries: false,
  });
  const link = ApolloLink.from([auth, api]);

  return new ApolloClient<NormalizedCacheObject>({
    assumeImmutableResults: true,
    cache: new InMemoryCache(),
    link,
  });
};

const clientProvider = (token?: string) => {
  return apolloClient({
    token,
    product: { key: "todo", gatewayUrl: todoGateway.url },
  });
};

export { clientProvider };
