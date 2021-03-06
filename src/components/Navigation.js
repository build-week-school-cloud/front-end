import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

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
const SignOutButton = styled.button`
border:#003F87 solid 1px;
width: 15%;
padding: 1rem 2rem;
margin:0rem 3rem;
color: #00B2EE;;
border-radius: 10px;
font-size: 1rem;
background-color:white;
text-shadow: -1px -1px 0 #003F87, 1px 1px 0 #003F87, 0 -1px 0 #003F87,
0 1px 0 #003F87, 1px -1px 0 #003F87, -1px 1px 0 #003F87, 1px 0 0 #003F87,
-1px 0 0 #003F87; 
font-size:1.5rem;
&:hover{
    transform: scale(1.1);
    transition: .5s;
}
`

function Navigation(){
    let history = useHistory();
    useEffect(() => {
        
        return 
    }, [history.location])
    
    const handleClick = e => {
        e.preventDefault();
        localStorage.clear();
        window.location = '/'
    }
    
    return (
        <Container>
            <ContainerLogo>
                <FontAwesomeIcon icon={faCloud} className='cloud-icon' />
                <h1>School in the Cloud</h1>
            </ContainerLogo>
                { }                    
                {localStorage.getItem('user_role') === 'administrator' && (<div className='navLinks'>
                    <Link className='links' to='/admin'>Admin</Link>
                </div>)}
                {localStorage.getItem('user_role') === 'volunteer' && (<div className='navLinks'>
                    <Link className='links' to='/volunteer'>Volunteer</Link>
                </div>)}
                {localStorage.getItem('user_role') === 'student' && (<div className='navLinks'>
                    <Link className='links' to='/student'>Student</Link>
                </div>)}
                {localStorage.getItem('token') ?
                    (<SignOutButton onClick={handleClick}>Log Out</SignOutButton>) :
                    (<><div className='navLinks'>
                    <Link className='links' to='/'>Login</Link>
                </div>
                <div className='navLinks'>
                    <Link  className='links' to='/sign-up'>Sign-Up</Link>
                </div></>)    
                }
        </Container>
    )
}    


const mapStateToProps = state => {
    return {
        userType: state.userType
    }
}

export default connect(
    mapStateToProps,
    {}
)(Navigation);