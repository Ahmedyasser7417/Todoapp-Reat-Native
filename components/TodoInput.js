import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles';

const TodoInput = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (title.trim() === '') return;

        onAddTodo({
            id: Date.now().toString(),
            title: title.trim(),
            description: description.trim(),
            done: false,
        });

        // Reset inputs
        setTitle('');
        setDescription('');
    };

    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <TextInput
                style={styles.input}
                placeholder="Enter Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Description"
                value={description}
                onChangeText={setDescription}
            />
            <TouchableOpacity style={styles.submitBtn} activeOpacity={0.7} onPress={handleSubmit}>
                <Text style={{ ...styles.text, fontWeight: 'bold' }}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TodoInput;
