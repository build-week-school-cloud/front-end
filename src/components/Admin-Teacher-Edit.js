import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap:wrap;
align-items:space-evenly;
`
const CardDiv = styled.div `
padding: 1rem;
width:80%;
margin: 1rem;
margin-top:2rem;
line-height: 2.5rem;
const Header = styled.h1
padding:.3rem;
text-shadow: -1px -1px 0 #003F87, 1px 1px 0 #003F87, 0 -1px 0 #003F87,
0 1px 0 #003F87, 1px -1px 0 #003F87, -1px 1px 0 #003F87, 1px 0 0 #003F87,
-1px 0 0 #003F87; 
letter-spacing: 1px;
font-size:1rem;
border-radius:10px;
letter-spacing:.2rem;
color:white;
box-shadow: 5px 5px 5px 5px lightgrey;
background-color: #00B2EE;
`
const SignUpButton = styled.button`
box-shadow: 5px 5px 5px 5px lightgrey;
width: 15%;
padding: 1rem 2rem;
margin:3rem 3rem;
margin-bottom: 1rem;
color: white;
border-radius: 10px;
font-size: 1rem;
background-color:#00B2EE ;
text-shadow: -1px -1px 0 #003F87, 1px 1px 0 #003F87, 0 -1px 0 #003F87,
0 1px 0 #003F87, 1px -1px 0 #003F87, -1px 1px 0 #003F87, 1px 0 0 #003F87,
-1px 0 0 #003F87; 
font-size:1.5rem;
&:hover{
    transform: scale(1.1);
    transition: .5s;
}
`
const ToDoListH1 = styled.h1`
width:100%;
margin: 2rem;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87,
-1.5px 0 0 #003F87; 
letter-spacing: 1px;
font-size:2rem;
color:#00B2EE;
`

function TeacherEdit({toDo}){
    return(
    <ContainerDiv>
        <ToDoListH1>Teachers Todo List</ToDoListH1>
        <SignUpButton>Edit</SignUpButton>
        <SignUpButton>Create</SignUpButton>
        <SignUpButton>Delete</SignUpButton>
        {toDo.map(todo => (
                <CardDiv key={todo.id}>
                    <h2>Task: {todo.name}</h2>
                    <div>description:{todo.description}</div>
                </CardDiv>
            ))}

    </ContainerDiv>)
}

export default TeacherEdit;


