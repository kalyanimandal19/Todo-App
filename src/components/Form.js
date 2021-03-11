import React from 'react';
// import { v4 as uuid } from 'uuid';
import { v4 as uuid } from "uuid";

const Form = ({ todoInput, todos, setTodoInput, setTodos, setFilter }) => {
    const todoInputHandler = (e) => {
        setTodoInput(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: todoInput, completed: false, id: uuid() }
        ]);
        setTodoInput('');
    }
    const filterHandler = (e) => {
        setFilter(e.target.value);
    }
    return (
        <form>
            <input
                type="text"
                className="todo-input"
                value={todoInput}
                onChange={todoInputHandler}
            />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="far fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="todo-filter" onChange={filterHandler}>
                    <option value="all">All</option>
                    <option value="notcompleted">Not Completed</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </form>
    )
}

export default Form
