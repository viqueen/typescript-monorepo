interface TodoConfig {
    BASE_URL: string;
    GATEWAY_URL: string;
}

const todoConfig: TodoConfig = {
    BASE_URL: 'http://localhost:9000',
    GATEWAY_URL: 'http://localhost:4000/gateway'
};

export { todoConfig };
export type { TodoConfig };
