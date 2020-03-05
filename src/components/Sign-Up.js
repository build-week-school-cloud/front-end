import React from 'react';
import { useState } from 'react';
import {withFormik, Form ,  Field} from 'formik';
import styled from 'styled-components';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { register } from '../actions';

const DivContainer = styled.div`
display: flex;
justify-content: center;
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
`
 
function SignUp({errors, touched, ...props}){
    const [newUser, setNewUser] = useState({
        full_name: '',
        username: '',
        password: '',
        role: null,
        email: '',
        phone: ''
    })
    const handleChanges = e => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submit New User:", newUser);
        if (newUser.role != null) {
            props.register(newUser);
        }
    }
    return(
        <DivContainer>
            <Form onSubmit={handleSubmit} className="form-holder">
                <FontAwesomeIcon icon={faCloud} className='cloud-icon2' />
                <h1>Create Account</h1>
                <label class='label' htmlFor='full_name'>
                    <div>Full Name:</div>
                    <Field value={newUser.name} onChange={handleChanges} type='text' name='full_name' id='full_name' />
                </label>
                { touched.name && errors.name && (<p>{errors.name}</p>)}
                <label class='label' htmlFor='username'>
                    <div>Username:</div>
                    <Field value={newUser.username} onChange={handleChanges} type='text' name='username' id='username'/>
                </label>
                { touched.username && errors.username && (<p>{errors.username}</p>)}
                <label class='label' htmlFor='password'>
                    <div>Password:</div>
                    <Field value={newUser.password} onChange={handleChanges} type='password' name='password' id='password'/>
                </label>
                { touched.password && errors.password && (<p>{errors.password}</p>)}
                <label className='label' htmlFor='role'>
                    <div>Login Type:</div>
                    <Field as='select' value={newUser.role} onChange={handleChanges} className='label2' type='checkbox' name='role' id='role'>
                        <option className='options' disabled>Choose one</option>
                        <option value='adminstator'>Adminstrator</option>
                        <option value='volunteer'>Volunteer</option>
                        <option value='student'>Student</option>
                    </Field>
                </label>
                <label class='label' htmlFor='county'>
                    <div>Location:</div>
                    <Field type='text' name='location' id='location'/>
                </label>
                { touched.location && errors.location && (<p>{errors.location}</p>)}
                <label class='label' htmlFor='email'>
                    <div>Email:</div>
                    <Field value={newUser.email} onChange={handleChanges} type='text' name='email' id='email'/>
                </label>
                { touched.email && errors.email && (<p>{errors.email}</p>)}
                <label class='label' htmlFor='phone'>
                    <div>Phone Number:</div>
                    <Field value={newUser.phone} onChange={handleChanges} type='text'name='phone' id='phone'/>
                </label>
                { touched.phone && errors.phone && (<p>{errors.phone}</p>)}
                <SignUpButton type='submit'>Register</SignUpButton>
            </Form>
        </DivContainer>
    )
}

const SuperSignUp = withFormik({
    mapPropsToValues({name,username, password, role, email, phone, location }){
        return {
        name: name || '',
        username: username || '',
        password: password || '',
        role: role || '',
        location: location || '',
        email: email || '', 
        phone: phone || ''
    }},
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        username: Yup.string().required(),
        password: Yup.string().min(7).required(),
        location: Yup.string().required(),
        email: Yup.string().email().required(), 
        phone: Yup.number().min(10).max(10).required()
    })
})(SignUp)

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

export default connect(
    mapStateToProps,
    { register }
)(SuperSignUp);