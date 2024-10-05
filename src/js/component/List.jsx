import React from "react";

export const List = ({ todos, setTodos, deleteTodo }) => {
    return (
        <ul className="list-group">
            {todos.map((item, index) => {
                return <li className="list-group-item">{item.label} <button className="trash" onClick={() => deleteTodo(index)}>❌</button></li>
            })}
            <li className="list-group-item">{todos.length == 0 ? "No Task, add a Task" : todos.length == 1 ? "1 Item left" : todos.length + " Items left"}</li>
        </ul>
    )
}