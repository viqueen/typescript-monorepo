import { MutationResolvers } from '@monorepo-graphql/backend-types';

const updateTodoItemStatus: MutationResolvers['updateTodoItemStatus'] = async (
    _,
    _input,
    _ctx
) => {
    throw Error('implement me');
};

export { updateTodoItemStatus };
