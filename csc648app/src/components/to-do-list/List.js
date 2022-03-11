import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import './List.css';

const List = (props) => {
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')

    };

    return (
        
        <form className="todo-form" onSubmit={handleSubmit}>
            <button className="logout-btn" type="submit" onClick={(e) => handleLogout(e)}>
                Logout
            </button>
            <input type="text" placeholder="Add a task" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef}></input>
            <button className="todo-btn">Add task</button>
            
        </form>

    )
}

export default List;