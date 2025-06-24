import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const STORAGE_KEY = '@todos';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    loadTodos();
  }, []);

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

  const saveTodos = async (newTodos) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  };

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
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
            onPress={() => setFilter('All')}
          >
            <Text style={filter === 'All' ? styles.activeFilterText : styles.filterText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={filter === 'Active' ? styles.activeFilterBtn : styles.filterBtn}
            activeOpacity={0.7}
            onPress={() => setFilter('Active')}
          >
            <Text style={filter === 'Active' ? styles.activeFilterText : styles.filterText}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={filter === 'Done' ? styles.activeFilterBtn : styles.filterBtn}
            activeOpacity={0.7}
            onPress={() => setFilter('Done')}
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


