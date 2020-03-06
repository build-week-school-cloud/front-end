import React from 'react'
import styled from 'styled-components';
import { useState } from 'react'

const DivContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
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

const Title = styled.h1`
letter-spacing:.1rem;
`

export default function AddTodo() {
    const [todo, setTodo] = useState({
        name: '',
        description: ''
    })

    const handleChanges = e => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <DivContainer>
            <form onSubmit={handleSubmit} className='form-holder'>
                <Title>Add Todo Item</Title>
                <label className='label' htmlFor='name'>
                    <div>Name:</div>
                    <input type='text' value={todo.name} onChange={handleChanges} name='name' id='name'/>
                </label>                
                <label className='label' htmlFor='password'>
                    <div>Description:</div>
                    <input type='password' value={todo.description} onChange={handleChanges} name='password' id='password'/>
                </label>
                <Button type='submit'>Add Todo</Button>                
            </form>
        </DivContainer>
    )
}
