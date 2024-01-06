interface ITodoAuthenticated {}
interface ITodoApolloContext {
    authenticated: () => Promise<ITodoAuthenticated>;
}

class TodoApolloContext implements ITodoApolloContext {
    private _authenticated?: ITodoAuthenticated;
    async authenticated(): Promise<ITodoAuthenticated> {
        if (this._authenticated) return this._authenticated;
        this._authenticated = {};
        return this._authenticated;
    }
}

export { TodoApolloContext };
export type { ITodoApolloContext };
