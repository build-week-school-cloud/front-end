import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap:wrap;
align-items:space-evenly;
margin:1rem;
`

const CardDiv = styled.div `
padding: 3rem;
width:30%;
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
color:white;
box-shadow: 5px 5px 5px 5px lightgrey;
background-color: #00B2EE;
`

const SignUpButton = styled.button`
border: #003F87 2px solid;
width: 100%;
padding: 1rem 2rem;
margin-top:2rem;
margin-bottom: 1rem;
color: #003F87;
border-radius: 10px;
font-size: 1.3rem;
background-color: white;
&:hover{
    transform: scale(1.2);
    transition: .5s;
}
`

function TeacherList({teachers}){
    return(
    <ContainerDiv>
        {teachers.map(teacher => (
            <CardDiv key={teacher.id}>
                <h2>{teacher.name}</h2>
                <div>Subject: {teacher.subject}</div>
                <div>Times_available:{teacher.time} </div>
                <div>Location: {teacher.location}</div>
                <SignUpButton>Help</SignUpButton>
            </CardDiv>
        ))}

    </ContainerDiv>)
}

export default TeacherList;