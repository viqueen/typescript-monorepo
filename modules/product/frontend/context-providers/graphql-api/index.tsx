import React, { createContext, PropsWithChildren, useMemo } from "react";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { NormalizedCacheObject } from "@apollo/client";

interface GraphqlApi {
  client: ApolloClient<NormalizedCacheObject>;
}

const GraphqlApiContext = createContext<GraphqlApi>({
  client: new ApolloClient<NormalizedCacheObject>({
    cache: new InMemoryCache(),
  }),
});

interface GraphqlApiProviderProps extends PropsWithChildren {
  clientProvider: (token?: string) => ApolloClient<NormalizedCacheObject>;
}

const GraphqlApiProvider = ({
  children,
  clientProvider,
}: GraphqlApiProviderProps) => {
  const value = useMemo(() => {
    return { client: clientProvider() };
  }, []);

  return (
    <GraphqlApiContext.Provider value={value}>
      <ApolloProvider client={value.client}>{children}</ApolloProvider>
    </GraphqlApiContext.Provider>
  );
};

export { GraphqlApiProvider };
