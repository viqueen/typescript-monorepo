import { ApolloServer, ApolloServerPlugin } from '@apollo/server';
import {
    ExpressContextFunctionArgument,
    expressMiddleware
} from '@apollo/server/express4';
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from '@monorepo-graphql/backend-types';
import {
    ITodoApolloContext,
    TodoApolloContext
} from '@monorepo-graphql/context';
import { Express } from 'express';

interface GraphqlApiEndpointProps {
    app: Express;
}

const graphqlApiEndpoint = async ({ app }: GraphqlApiEndpointProps) => {
    const schema = makeExecutableSchema({
        typeDefs,
        resolvers: {}
    });

    const plugins = [
        ApolloServerPluginLandingPageGraphQLPlayground({
            settings: {
                'editor.reuseHeaders': true,
                'request.credentials': 'include'
            }
        }) as ApolloServerPlugin<ITodoApolloContext>
    ];

    const context = async (_: ExpressContextFunctionArgument) => {
        return new TodoApolloContext();
    };

    const server = new ApolloServer<ITodoApolloContext>({
        schema,
        plugins,
        introspection: true
    });
    await server.start();

    app.use(`/gateway/graphql-api`, expressMiddleware(server, { context }));
};

export { graphqlApiEndpoint };
