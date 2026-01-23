import AsyncStorage from '@react-native-async-storage/async-storage';
import { setTodos } from './actions';

const STORAGE_KEY = '@todos';

export const loadTodosAsync = () => async (dispatch) => {
    try {
        const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedTodos) {
            dispatch(setTodos(JSON.parse(storedTodos)));
        }
    } catch (error) {
        console.error('Error loading todos:', error);
    }
};

export const saveTodosAsync = (todos) => async () => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
        console.error('Error saving todos:', error);
    }
};
