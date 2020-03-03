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
width:25%;
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
border: #003F87 2px solid;
width: 20%;
padding: .5rem .5rem;
margin:1rem;
margin-bottom: 1rem;
color: #003F87;
border-radius: 10px;
font-size: 1rem;
background-color: white;
`

function TeacherEdit({teachers}){
    return(
    <ContainerDiv>
        {teachers.name.map(teacher => (
            <CardDiv key={teacher}>
                <h2>{teacher}</h2>
                <div>Subject: Math</div>
                <SignUpButton>Edit</SignUpButton>
                <SignUpButton>Create</SignUpButton>
                <SignUpButton>Delete</SignUpButton>

            </CardDiv>
        ))}

    </ContainerDiv>)
}

export default TeacherEdit;