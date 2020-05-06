
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Provider} from 'react-redux';
import {Todo} from './src/Todo/Todo';
import {store} from './src/redux';

export const App = () =>{
  return(
    <Provider store={store}>
      <View style={styles.todos}>
        <Todo />
      </View>
    </Provider>
  );
};
const styles = StyleSheet.create({
  todos: {
    flex:1,
    padding:25,
    
  }

});