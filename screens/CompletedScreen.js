import React, { useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles';
import TodoList from '../components/TodoList';
import { useFocusEffect } from '@react-navigation/native';

const STORAGE_KEY = '@todos';

export default function CompletedScreen() {
    const [todos, setTodos] = useState([]);

    useFocusEffect(
        useCallback(() => {
            loadTodos();
        }, [])
    );

    const loadTodos = async () => {
        try {
            const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
            if (storedTodos) {
                setTodos(JSON.parse(storedTodos));
            }
        } catch (error) {
            console.error('Error loading todos:', error);
        }
    };

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
    };

    const handleToggleTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        setTodos(updatedTodos);
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
    };

    const completedTodos = todos.filter(todo => todo.done);

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 19 }}>Completed Tasks</Text>
                <TodoList
                    todos={completedTodos}
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                />
                <View style={styles.todosContainer}>
                    {completedTodos.length === 0 ? (
                        <Text style={{ textAlign: 'center', marginTop: 20 }}>No completed todos</Text>
                    ) : null}
                </View>
            </View>
        </View>
    );
}
