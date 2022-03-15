import React, { useState } from "react";
import List from "./List";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    // Function to add a task 
    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)

    };

    // Function to complete to task after clicking on it.
    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    };

    // Removes the task and sets the id to null 
    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };



    return (
        <div>
            <h1> Add a task</h1>
            <List onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
        </div>
    )

}

export default TodoList;