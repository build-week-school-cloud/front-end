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
font-size:1rem;
border-radius:10px;
letter-spacing:.2rem;
color:#00B2EE;
box-shadow: 3px 3px 3px 3px lightgrey;
`


function ToDoList (props){
    
    return (
        <ContainerDiv>
            <Header>To Do List:</Header>
            {props.toDoList.map(todo => (
                <CardDiv key={todo.id}>
                    <h2>{todo.title} <span>Due_date:{todo.due_date}</span></h2>
                    <div>{todo.description}</div>
                </CardDiv>
            ))}
        </ContainerDiv>
    )
}

export default ToDoList;