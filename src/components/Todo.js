import React from 'react'

const Todo = ({ text, todos, setTodos, todo }) => {
    const deleteHandler = () => {
        setTodos(
            todos.filter((item) => item.id !== todo.id)
        )
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className="checked-btn" onClick={completeHandler}>
                <i className="fas fa-check-circle"></i>
            </button>
            <button className="delete-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
