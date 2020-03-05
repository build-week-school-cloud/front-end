import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
padding:.3rem;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87,
-1.5px 0 0 #003F87; 
letter-spacing: 1px;
font-size:2rem;
color:#00B2EE;
width:100%;
`

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
line-height: 2.5rem;
const Header = styled.h1
padding:.3rem;
text-shadow: -1px -1px 0 #003F87, 1px 1px 0 #003F87, 0 -1px 0 #003F87,
0 1px 0 #003F87, 1px -1px 0 #003F87, -1px 1px 0 #003F87, 1px 0 0 #003F87,
-1px 0 0 #003F87; 
letter-spacing: 1px;
font-size:1.3rem;
border-radius:10px;
letter-spacing:.2rem;
color:white;
box-shadow: 5px 5px 5px 5px lightgrey;
background-color: #00B2EE;
`

const MarkButton = styled.button`
border: none;
border: #003F87 1px solid;
width: 50%;
padding: .5rem 1.5rem;
margin-top:2rem;
margin-bottom: 1rem;
color: #003F87;
border-radius: 10px;
font-size: 1.3rem;
&:hover{
    transform: scale(1.2);
    transition: .5s;
}
`

function ToDoList ({toDo}){
    
    return (
        <ContainerDiv>
            <Header>To Do List:</Header>
            {toDo.map(todo => (
                <CardDiv key={todo.id}>
                    <h2>Task: {todo.name}</h2>
                    <div>Description: {todo.location}</div>
                    <MarkButton type='submit'>Marked as Complete</MarkButton>
                </CardDiv>
            ))}
        </ContainerDiv>
    )
}

export default ToDoList;