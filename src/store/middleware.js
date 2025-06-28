import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actions';
import { saveTodosAsync } from './asyncActions';

const storageMiddleware = store => next => action => {
    const result = next(action);
    if ([ADD_TODO, DELETE_TODO, TOGGLE_TODO].includes(action.type)) {
        const todos = store.getState().todos;
        store.dispatch(saveTodosAsync(todos));
    }
    return result;
};

export default storageMiddleware;
