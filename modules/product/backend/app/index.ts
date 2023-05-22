import express, { json } from 'express';

import { productGateway } from './product-gateway';
import { WithExpressApp } from './types';

const createExpressApp = async (): Promise<WithExpressApp> => {
    const app = express();
    app.use(json());
    return { app };
};

const configureProduct = async ({
    app
}: WithExpressApp): Promise<WithExpressApp> => {
    await productGateway({ app });
    return { app };
};

const startExpressApp = async ({ app }: WithExpressApp) => {
    const port = 3000;
    const server = app.listen(port, () => {
        console.info(`⚡️[product-be] ready at http://localhost:${port}`);
    });
    const shutdown = () => {
        console.info(`\n🛑[product-be] tear down`);
        server.close();
    };
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
};

createExpressApp()
    .then(configureProduct)
    .then(startExpressApp)
    .catch(console.error);
