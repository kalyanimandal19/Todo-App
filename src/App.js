import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getTodos();
    // return () => {
    //   cleanup
    // }
  }, [])
  useEffect(() => {
    filteredHandler();
    saveTodos();
    // return () => {
    //   cleanup
    // }
  }, [todos, filter])
  const filteredHandler = () => {
    switch (filter) {
      case 'notcompleted':
        setFilteredTodos(
          todos.filter((todo) => (
            todo.completed === false
          ))
        )
        break;
      case 'completed':
        setFilteredTodos(
          todos.filter((todo) => (
            todo.completed === true
          ))
        )
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todoInput={todoInput}
        todos={todos}
        setTodoInput={setTodoInput}
        setTodos={setTodos}
        setFilter={setFilter}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
