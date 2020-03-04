import React from 'react';
import { useState } from 'react';
import {withFormik, Form ,  Field} from 'formik';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Login.css';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { login } from '../actions';

const FormHolder = styled.form`
display:flex;
flex-direction: column;
align-items: center;
width:40%;
padding:2rem;
margin: 5rem 1rem;
border-radius: 10px;
box-shadow: 5px 5px 5px 5px lightgrey;
background-color: #00B2EE;
color: white;
text-shadow: -1px -1px 0 #003F87, 1px 1px 0 #003F87, 0 -1px 0 #003F87, 0 1px 0 #003F87, 1px -1px 0 #003F87, -1px 1px 0 #003F87, 1px 0 0 #003F87, -1px 0 0 #003F87; 
`

const DivContainer = styled.div`
display: flex;
justify-content: center;
`

const SignUpButton = styled.button`
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

function Login({ touched, errors, ...props}){
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const handleChanges = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.login(user)
    }
    return(
        <DivContainer>
            <Form onSubmit={handleSubmit} className='form-holder'>
                <FontAwesomeIcon icon={faCloud} className='cloud-icon2' />
                <Title>Login</Title>
                <label className='label' htmlFor='username'>
                    <div>Username:</div>
                    <Field type='text' value={user.username} onChange={handleChanges} name='username' id='username'/>
                </label>
                { touched.username && errors.username && (<p>{errors.username}</p>)}
                <label className='label' htmlFor='password'>
                    <div>Password:</div>
                    <Field type='password' value={user.password} onChange={handleChanges} name='password' id='password'/>
                </label>
                { touched.password && errors.password && (<p>{errors.password}</p>)}
                <label className='label' htmlFor='user'>
                    <div>Login Type:</div>
                    <Field as='select' value={user.password} onChange={handleChanges} className='label2' type='checkbox' name='user' id='user'>
                        <option className='options' disabled>Choose one</option>
                        <option value='adminstator'>Adminstrator</option>
                        <option value='volunteer'>Volunteer</option>
                        <option value='student'>Student</option>
                    </Field>
                </label>
                { touched.user && errors.user && (<p>{errors.user}</p>)}
                <SignUpButton type='submit'>Sign In</SignUpButton>
                <div className='text'>Not a member yet? <Link className='sign-up-link' to='/sign-up'>Sign-Up</Link></div>
            </Form>
        </DivContainer>
    )
}

const SuperLogin = withFormik({
mapPropsToValues({username, password, user}){
    return {
    username: username || '',
    password: password || '',
    user: user || ''
}},
validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
    user: Yup.string().required()
})
})(Login)

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

export default connect(
    mapStateToProps,
    { login }
)(SuperLogin);