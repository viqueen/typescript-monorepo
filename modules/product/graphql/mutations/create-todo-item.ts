import { MutationResolvers } from '@monorepo-graphql/backend-types';

const createTodoItem: MutationResolvers['createTodoItem'] = async (
    _,
    _input,
    _ctx
) => {
    throw Error('implement me');
};

export { createTodoItem };
