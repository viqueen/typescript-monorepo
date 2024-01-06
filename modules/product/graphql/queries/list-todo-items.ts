import { QueryResolvers } from '@monorepo-graphql/backend-types';

const listTodoItems: QueryResolvers['listTodoItems'] = async (
    _,
    _input,
    _ctx
) => {
    throw Error('implement me');
};

export { listTodoItems };
