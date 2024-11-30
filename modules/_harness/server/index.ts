import { graphqlApiEndpoint } from '@monorepo-backend-endpoints/graphql-api';
import express, { Express, json } from 'express';

interface WithExpressApp {
    app: Express;
}

const createExpressApp = async (): Promise<WithExpressApp> => {
    const app = express();
    app.use(json());
    console.info('\n▶️ [monorepo-harness] created express app');
    return { app };
};

const configureProduct = async ({ app }: WithExpressApp) => {
    await graphqlApiEndpoint({ app });
    return { app };
};

const startExpressApp = async ({ app }: WithExpressApp) => {
    const port = 4000;
    const server = app.listen(port, () => {
        console.info(
            `⚡️ [monorepo-harness] express app ready at http://localhost:${port}`
        );
    });
    const shutdown = () => {
        console.info('\n🛑 [monorepo-harness] shutdown');
        server.close();
    };
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
};

createExpressApp()
    .then(configureProduct)
    .then(startExpressApp)
    .catch(console.error);
