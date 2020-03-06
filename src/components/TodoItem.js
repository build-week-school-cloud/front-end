import React from 'react'

export default function TodoItem(props) {
    

    return (
        <>
            {props.todoList.map(todo => 
                <div id={todo.id} onClick={props.handleClick} key={todo.id}>
                    <h3>{todo.name}</h3>
                    <p>{todo.description}</p>
                    <button id={todo.id} onClick={() => {
                        props.setItemToEdit(todo)
                        props.setEditing(true)
                    }}>Edit</button>
                    <button id={todo.id} onClick={props.handleDelete}>Delete</button>
                </div>)}
        </>
    )
}
