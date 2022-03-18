import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { useDispatch } from "react-redux";
import { setTodoList } from "../../redux/actions/todoActions";
import { deleteTask } from "../../redux/actions/taskActions";
import { setTask } from "../../redux/actions/taskActions";

import List from "./List";
import Todo from "./Todo";

const TodoList = (props) => {
    const [todos, setTodos] = useState([]);
    const dispatch = useDispatch();

    // Function to add a task 
    const addTodo = (todo) => {
        
        // Allows user to continue entering text if enter key is pressed in add task field
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        
        dispatch(setTask({todo}));
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

    // on page load
    useEffect(()=> {
        if(props.todolist.length === 0) {
            console.log("GETTING TASKS")
            props.defaultTasks();
        }
    },[]);


    return (
        <div>
            <h1> Todo List</h1>
            <List onSubmit={addTodo} />
            {/* // also changed this */}
            <Todo todos={props.todolist} completeTodo={completeTodo} removeTodo={removeTodo}/>
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