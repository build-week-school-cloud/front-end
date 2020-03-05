import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ToDoList from './TodoList';
import styled from 'styled-components';
import {Link, Route } from 'react-router-dom';
import VolunteerProfile from './Volunteer-Profile';
import Login from './Login';
import './Links.css';
import axiosWithAuth from '../utils/axiosWithAuth';

const Header = styled.h1`
padding:.3rem;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87, -1.5px 0 0 #003F87; 
letter-spacing: 1px;
font-size:2.5rem;
color:#00B2EE;
`

const CustomNav = styled.nav`
display:flex; 
justify-content: space-around;
width: 100%;
`

const CustomizeContainer = styled.div`
display:flex; 
flex-direction: column;
align-items: center;
`

function VolunteerView(){

const [toDo, setToDo] = useState([]);

useEffect(()=>{
	axiosWithAuth().get('https://cloudschoolbw.herokuapp.com/api/volunteer').then(res => {
		setToDo(res.data);
	}).catch(err => console.log(err))
   }, [])
    return(
        <CustomizeContainer className='container'>
            <Header>Welcome Back Name!</Header>
			<CustomNav>
				<Link className='links nestedlink' to='/volunteer'>Profile</Link>
				<Link className='links nestedlink' to='/volunteer/todo-list'>Todo List</Link>
				<Link className='links nestedlink' to='/'>Logout</Link>
			</CustomNav>
			<Route exact path='/'>
                <Login/>
            </Route>
			<Route exact path='/volunteer'>
				<VolunteerProfile/>
			</Route>
			<Route path='/volunteer/todo-list'>
				<ToDoList toDo={toDo} />	
			</Route>
        </CustomizeContainer>
    )
}

export default VolunteerView;