import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_FILTER, SET_TODOS } from './actions';

const initialState = {
    todos: [],
    filter: 'All',
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TODOS:
            return { ...state, todos: action.payload };
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case DELETE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, done: !todo.done } : todo
                ),
            };
        case SET_FILTER:
            return { ...state, filter: action.payload };
        default:
            return state;
    }
}
