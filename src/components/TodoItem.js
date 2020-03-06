import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
display: flex;
justify-content: space-between;
`

const Button = styled.button`
border: #003F87 2px solid;
width: 61%;
padding: .5rem 1.5rem;
margin-top:2rem;
margin-bottom: 2rem;
color: #003F87;
border-radius: 10px;
font-size: 1.3rem;
margin-left: .5rem;
`

export default function TodoItem(props) {
    

    return (
        <>
            {props.todoList.map(todo => 
                <div id={todo.id} onClick={props.handleClick} key={todo.id}>
                    <h3>{todo.name}</h3>
                    <p>{todo.description}</p>
                    <Div>
                        <Button id={todo.id} onClick={() => {
                            props.setItemToEdit(todo)
                            props.setEditing(true)
                        }}>Edit</Button>
                        <Button id={todo.id} onClick={props.handleDelete}>Delete</Button>
                    </Div>
                </div>)}
        </>
    )
}
