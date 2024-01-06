import type { CodegenConfig } from '@graphql-codegen/cli';
import {
    backendGraphQLConfig,
    backendGraphQLPlugins,
    frontendGraphQLConfig,
    frontendGraphQLPlugins
} from '@labset/platform-build-graphql-codegen';

const config: CodegenConfig = {
    overwrite: true,
    generates: {
        '../@types/backend/__generated__/api.ts': {
            schema: ['./**/index.graphql'],
            plugins: [...backendGraphQLPlugins],
            config: {
                ...backendGraphQLConfig,
                contextType: '@monorepo-graphql/context#ITodoApolloContext'
            }
        },
        '../@types/frontend/__generated__/api.ts': {
            schema: ['./**/*.graphql'],
            documents: ['./**/api.graphql'],
            plugins: [...frontendGraphQLPlugins],
            config: { ...frontendGraphQLConfig }
        }
    }
};

export default config;
