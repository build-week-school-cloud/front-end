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
const SignUpButton = styled.button`
border: #003F87 2px solid;
width: 50%;
padding: .5rem 1.5rem;
margin-top:2rem;
margin-bottom: 1rem;
color: #003F87;
border-radius: 10px;
font-size: 1.3rem;
background-color: #00B2EE;
`

function TeacherList({teachers}){
    return(
    <ContainerDiv>
        {teachers.name.map(teacher => (
            <CardDiv key={teacher}>
                <h2>{teacher}</h2>
                <div>Subject: Math</div>
                <div>Times_available: 2pm-6pm mon-fri </div>
                <div>Location: Philly</div>
                <SignUpButton>Request Help</SignUpButton>
            </CardDiv>
        ))}

    </ContainerDiv>)
}

export default TeacherList;