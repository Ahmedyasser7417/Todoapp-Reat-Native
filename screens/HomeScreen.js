import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, setFilter } from '../src/store/actions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const filter = useSelector(state => state.filter);

    const handleAddTodo = (newTodo) => {
        dispatch(addTodo(newTodo));
    };
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };
    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };
    const handleSetFilter = (filter) => {
        dispatch(setFilter(filter));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'All') return true;
        if (filter === 'Active') return !todo.done;
        if (filter === 'Done') return todo.done;
    });

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 19 }}>Todo App</Text>
                <TodoInput onAddTodo={handleAddTodo} />
                <View style={styles.dividerLine} />
                <View style={styles.filterContainer}>
                    <TouchableOpacity
                        style={filter === 'All' ? styles.activeFilterBtn : styles.filterBtn}
                        activeOpacity={0.7}
                        onPress={() => handleSetFilter('All')}
                    >
                        <Text style={filter === 'All' ? styles.activeFilterText : styles.filterText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={filter === 'Active' ? styles.activeFilterBtn : styles.filterBtn}
                        activeOpacity={0.7}
                        onPress={() => handleSetFilter('Active')}
                    >
                        <Text style={filter === 'Active' ? styles.activeFilterText : styles.filterText}>Active</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={filter === 'Done' ? styles.activeFilterBtn : styles.filterBtn}
                        activeOpacity={0.7}
                        onPress={() => handleSetFilter('Done')}
                    >
                        <Text style={filter === 'Done' ? styles.activeFilterText : styles.filterText}>Done</Text>
                    </TouchableOpacity>
                </View>
                <TodoList
                    todos={filteredTodos}
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                />
                <View style={styles.todosContainer}>
                    {filteredTodos.length === 0 ? (
                        <Text style={{ textAlign: 'center', marginTop: 20 }}>No todos found</Text>
                    ) : null}
                </View>
            </View>
        </View>
    );
}
