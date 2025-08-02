import React, { useState } from 'react';
import styles from './Todo.module.css';
export default function Todo({ setManyTodos,manyTodos }) {

    const [todos, setTodos] = useState({name:"",done:false});
    function handleAddTodo(e) {
        e.preventDefault();
        if (todos.name.trim() === "") return; 
        setManyTodos([todos, ...manyTodos]);
        setTodos({ name: "", done: false }); 
    }
    return (
        <form className={styles.form} action="" onSubmit={handleAddTodo}>
            <input type="text" value={todos.name} onChange={(e) => setTodos({name:e.target.value,done:false})} placeholder="Add a new todo" />
            <button  type="submit">Add</button>
        </form>
    );

}