import React from 'react'
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useState, useEffect } from 'react'

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

export default function AddTodo(props) {
    const [todo, setTodo] = useState({
        name: '',
        description: ''
    })
    
    useEffect(() => {
        return
    }, [props.editing])

    const handleChanges = e => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }    

    const handleSubmit = e => {
        e.preventDefault();
        if (props.editing === false) {
            axiosWithAuth()
                .post('/admin', todo)
                .then(res => {
                    console.log(res)
                    props.addOne()
            })
            .catch(err => {
                console.log(err)
            })
        } else if (props.editing === true) {
            axiosWithAuth()
                .put(`/admin/${props.itemToEdit.id}`, todo)
                .then(res => {
                    console.log('Edit response', res)
                    props.addOne();
                })
                .catch(err => {
                    console.log(err)
                })
        }
        
    }
    return (
        <DivContainer>
            <form onSubmit={handleSubmit} className='form-holder'>
                <Title>{props.editing === false ? 'Add Todo Item' : 'Edit Todo Item'}</Title>
                <label className='label' htmlFor='name'>
                    <div>Name:</div>
                    <input type='text' value={todo.name} onChange={handleChanges} name='name' id='name'/>
                </label>                
                <label className='label' htmlFor='description'>
                    <div>Description:</div>
                    <input type='text' value={todo.description} onChange={handleChanges} name='description' id='description'/>
                </label>
                <Button type='submit'>{props.editing === false ? 'Add Todo' : 'Edit Todo'}</Button>                
            </form>
        </DivContainer>
    )
}
