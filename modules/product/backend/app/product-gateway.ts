import { WithExpressApp } from './types';

const productGateway = async ({ app }: WithExpressApp) => {
    app.get('/product-gateway/health', (_request, response) => {
        response.status(200).send({
            state: 'RUNNING'
        });
    });
};

export { productGateway };
