interface TodoGateway {
  url: string;
}

declare const __TODO_GATEWAY__: TodoGateway;
const todoGateway: TodoGateway = __TODO_GATEWAY__;

export { todoGateway };
