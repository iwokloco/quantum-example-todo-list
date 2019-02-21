import React, { Component } from 'react';
import './App.css';
import { Filter } from './components/Filter/Filter';
import { TodoList } from './components/TodoList/TodoList';
import { AddTodo } from './components/AddTodo/AddTodo';

class App extends Component {

  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <Filter />
      </div>
    );
  }
}

export default App;
