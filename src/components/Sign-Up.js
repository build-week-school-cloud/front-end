import React from 'react';
import {withFormik, Form ,  Field} from 'formik';
import styled from 'styled-components';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';

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
 
function SignUp({errors, touched}){
    return(
        <DivContainer>
            <Form className="form-holder">
                <FontAwesomeIcon icon={faCloud} className='cloud-icon2' />
                <h1>Create Account</h1>
                <label class='label' htmlFor='name'>
                    <div>Full Name:</div>
                    <Field type='text' name='name' id='name' />
                </label>
                { touched.name && errors.name && (<p>{errors.name}</p>)}
                <label class='label' htmlFor='username'>
                    <div>Username:</div>
                    <Field type='text' name='username' id='username'/>
                </label>
                { touched.username && errors.username && (<p>{errors.username}</p>)}
                <label class='label' htmlFor='password'>
                    <div>Password:</div>
                    <Field type='password' name='password' id='password'/>
                </label>
                { touched.password && errors.password && (<p>{errors.password}</p>)}
                <label className='label' htmlFor='user'>
                    <div>Login Type:</div>
                    <Field as='select' className='label2' type='checkbox' name='user' id='user'>
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
                    <Field type='text' name='email' id='email'/>
                </label>
                { touched.email && errors.email && (<p>{errors.email}</p>)}
                <label class='label' htmlFor='phone'>
                    <div>Phone Number:</div>
                    <Field type='text'name='phone' id='phone'/>
                </label>
                { touched.phone && errors.phone && (<p>{errors.phone}</p>)}
                <SignUpButton type='submit'>Register</SignUpButton>
            </Form>
        </DivContainer>
    )
}

const SuperSignUp = withFormik({
    mapPropsToValues({name,username, password, user, email, phone, location }){
        return {
        name: name || '',
        username: username || '',
        password: password || '',
        user: user || '',
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
export default SuperSignUp;