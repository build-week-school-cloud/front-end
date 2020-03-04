import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css'

const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
background-color:#00B2EE;
margin:1rem;
border-radius: 10px;
color:white;
border: #003F87 solid 1px;
`

const ContainerLogo = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding:.3rem;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87,
-1.5px 0 0 #003F87; 
letter-spacing: 1px;
font-size:1.5rem;
`

function Navigation (){
    return (
        <Container>
            <ContainerLogo>
                <FontAwesomeIcon icon={faCloud} className='cloud-icon' />
                <h1>School in the Cloud</h1>
            </ContainerLogo>
                <div className='navLinks'>
                    <Link className='links' to='/'>Login</Link>
                </div>
                <div className='navLinks'>
                    <Link  className='links' to='/sign-up'>Sign-Up</Link>
                </div>
                <div className='navLinks'>
                    <Link className='links' to='/admin/:id'>Admin</Link>
                </div>
                <div className='navLinks'>
                    <Link className='links' to='/volunteer/:id'>Volunteer</Link>
                </div>
                <div className='navLinks'>
                    <Link className='links' to='/student/:id'>Student</Link>
                </div>
        </Container>
    )
}


export default Navigation;