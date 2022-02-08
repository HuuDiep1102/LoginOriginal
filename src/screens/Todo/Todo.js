import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/EvilIcons';
import styles from './Todo.styles'
import { AddTodo, RemoveTodo } from '../../redux/actions/TodoAction';
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';

const Todo = () => {
  const [todoValue, setTodoValue] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  const addTodo = useCallback(
    () => {
      dispatch(AddTodo(todoValue));
    },
    [dispatch,todoValue],
  )

  const removeTodo = useCallback(
    (item) => {
      dispatch(RemoveTodo(item));
    },
    [dispatch],
  )



  const renderTodoList = () => {
    return (
      <FlatList
        keyExtractor={(item) => item.toString()}
        data={todos}
        renderItem={({ item }) => {
          return (
            <View style={styles.todoView}>
              <View style={styles.todoList}>
                <Text>{item}</Text>
              </View>

              <TouchableOpacity
                onPress={() => removeTodo(item)}
                style={styles.buttonRemove}
                name="increase"
              >
                <Ionicons name="trash" size={24} />
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setTodoValue}
          placeholder={'Add your todo here'}
          value={todoValue}
        />
        <TouchableOpacity
          onPress={addTodo}
          style={styles.button}
          name="increase"
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.listText}>
        List of Todos :
      </Text>
      {renderTodoList()}
    </View>
  );
};



export default Todo;
