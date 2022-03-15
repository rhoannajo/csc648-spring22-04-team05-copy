import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import List from './List';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    
    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <List edit={edit} onSubmit={submitUpdate} />
    }

    // Displays the tasks with a checkbox and delete icon
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <label className='checkbox'>
                <div key={todo.id}>
                    <input type="checkbox" className='check' onClick={() => completeTodo(todo.id)} />  {todo.text}
                </div>
            </label>


            <div className='icons'>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />

            </div>
        </div>
    ))


}

export default Todo;