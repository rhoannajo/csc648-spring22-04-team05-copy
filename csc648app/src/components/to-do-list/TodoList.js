import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { setTodoList } from "../../redux/actions/todoActions";

import List from "./List";
import Todo from "./Todo";

const TodoList = (props) => {
    const [todos, setTodos] = useState([]);

    // Function to add a task 
    const addTodo = (todo) => {
        console.log("CHICKED")
        // Allows user to continue entering text if enter key is pressed in add task field
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        console.log("CHICKED")
        const obj = {
            title:todo.text
        }
        const newTodos = [obj, ...todos]

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

    // on page load
    useEffect(()=> {
        if(props.todolist.length === 0) {
            console.log("GETTING TASKS")
            props.defaultTasks();
            setTimeout(() => {
                console.log(props.todolist);
                setTodos(props.todolist);
            },1000);
            
        }
    },[]);


    return (
        <div>
            <h1> Todo List</h1>
            <List onSubmit={addTodo} />
            {/* // also changed this */}
            <Todo todos={props.todolist} completeTodo={completeTodo} removeTodo={removeTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>

        </div>
    )

}


// mapping state to props
const mapStateToProps = (state) => {
    return { todolist: state.todo.items }
}

// matching dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        defaultTasks: () => dispatch(setTodoList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)