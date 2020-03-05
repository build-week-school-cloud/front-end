import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

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

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // history: useHistory()
        }
    }

    handleClick = e => {
        e.preventDefault();
        localStorage.clear();
        window.location = '/'
    }
    render(){
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
                        (<button onClick={this.handleClick}>Log Out</button>) :
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