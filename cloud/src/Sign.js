import React from 'react';
import {withFormik} from 'formik';
import styled from 'styled-components';
import './signUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

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
width: 50%;
padding: .5rem 1.5rem;
margin-top:2rem;
margin-bottom: 1rem;
color: #003F87;
border-radius: 10px;
font-size: 1.3rem;
`
 
function SignUp(){
    return(
        <DivContainer>
            <FormHolder>
                <FontAwesomeIcon icon={faCloud} className='cloud-icon2' />
                <h1>Create Account</h1>
                <label class='label' htmlFor='username'>
                    <div>Full Name:</div>
                    <input type='text' name='name' id='name'/>
                </label>
                <label class='label' htmlFor='username'>
                    <div>Username:</div>
                    <input type='text' name='username' id='username'/>
                </label>
                <label class='label' htmlFor='password'>
                    <div>Password:</div>
                    <input type='password' name='password' id='password'/>
                </label>
                <label className='label' htmlFor='user'>
                    <div>Login Type:</div>
                    <select className='label2' type='checkbox' name='password' id='password'>
                        <option className='options' disabled>Choose one</option>
                        <option value='adminstator'>Adminstrator</option>
                        <option value='volunteer'>Volunteer</option>
                        <option value='student'>Student</option>
                    </select>
                </label>
                <label class='label' htmlFor='email'>
                    <div>Email:</div>
                    <input type='text' name='email' id='email'/>
                </label>
                <label class='label' htmlFor='phone'>
                    <div>Phone Number:</div>
                    <input type='text'name='phone' id='phone'/>
                </label>
                <SignUpButton type='submit'>Register</SignUpButton>
            </FormHolder>
        </DivContainer>
    )
}


export default SignUp;