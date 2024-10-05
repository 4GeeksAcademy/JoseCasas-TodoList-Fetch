import React, { useState } from "react";
import { List } from "./List";
import { Input } from "./input";

const Home = () => {
	const [todos, setTodos] = useState([])
	const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos)
    }
	return (
		<div className="Page text-center">
			<h1 className="title">To do List :</h1>
			<Input todos={todos} setTodos={setTodos} />
			<List todos={todos} setTodos={setTodos}	deleteTodo={deleteTodo} />
		</div>
	);
};

export default Home;
