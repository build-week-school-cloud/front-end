import React from 'react';


function ToDoList (props){
    console.log(props.toDoList)
    return (
        <div>
            <h1>To Do List:</h1>
            {props.toDoList.map(todo => (
                <div key={todo.id}>
                    <h2>{todo.title} <span>Due_date:{todo.due_date}</span></h2>
                    <div>{todo.description}</div>
                </div>
            ))}
        </div>
    )
}

export default ToDoList;