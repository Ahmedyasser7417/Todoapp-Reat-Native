import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import AntDesign from '@expo/vector-icons/AntDesign';

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
    const renderItem = ({ item }) => (
        <View style={styles.todoItem}>
            <TouchableOpacity
                style={styles.todoContent}
                onPress={() => onToggleTodo(item.id)}
            >
                <Text style={[styles.todoTitle, item.done && styles.todoTitleDone]}>
                    {item.title}
                </Text>
                {item.description ? (
                    <Text style={[styles.todoDescription, item.done && styles.todoDescriptionDone]}>
                        {item.description}
                    </Text>
                ) : null}
                <Text style={{ color: item.done ? 'green' : 'red' }}>
                    {item.done ? 'Done' : 'Active'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.doneButton}
                onPress={() => onToggleTodo(item.id)}
            >
                <AntDesign name="checkcircleo" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => onDeleteTodo(item.id)}
            >
                <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            style={styles.todoList}
        />
    );
};

export default TodoList;
