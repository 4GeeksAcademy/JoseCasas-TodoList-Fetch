import React, { useState } from "react";

export const Input = ({ todos, setTodos }) => {
    const [inputText, setInputText] = useState("")
    const addTodo = (e) => {
        if (e.key === "Enter" && inputText.trim() !== "") {
            let newTodos = todos.concat({ label: inputText, done: false })
            setTodos(newTodos)
            setInputText("")
        }
    }
   
    return (

        <input value={inputText} placeholder="Add a task..." onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => addTodo(e)}/>
    )
}