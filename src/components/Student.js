import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TeachersList from './Teacher';
import Form from './Form-Search';
import { Link, Route } from 'react-router-dom';
import StudentProfile from './Student-profile';
import Login from './Login';
import './Links.css';
import axiosWithAuth from '../utils/axiosWithAuth';

const Header = styled.h1`
padding:.3rem;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87,
-1.5px 0 0 #003F87; 
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

function StudentView(){
    
const [teachers, setTeachers] = useState([]);
const [displayed, setDisplayed ] = useState([])
const [input, setInput] = useState('');

// useEffect(()=>{
//     axiosWithAuth.get('').then(res => {
//         console.log(res)
//         // setTeachers(res.data.results); 
//         // setDisplayed(res.data.results);
// }).catch(err => console.log(err))

//     },[])
   const inputChange = e => {
        setInput(e.target.value)
        const filtered = teachers.filter( teacher => (teacher.name.toLowerCase().includes(input.toLowerCase())))
        setDisplayed(filtered)
    }

    return(
        <CustomizeContainer>
            <Header>Welcome Back Name!</Header>
            <CustomNav>
                <Link className='links nestedlink' to='/student/:id'>Profile</Link>
                <Link className='links nestedlink' to='/student/:id/search-teachers'>Search for Teachers</Link>
                <Link className='links nestedlink' to='/'>Logout</Link>
            </CustomNav>
            <Route exact path='/'>
                <Login/>
            </Route>
            <Route exact path='/student/:id'>
                <StudentProfile/>
            </Route>
            <Route path='/student/:id/search-teachers'>
                <Form inputChange={inputChange}/>
                <TeachersList teachers={displayed} />
            </Route>
        </CustomizeContainer>
    )
}

export default StudentView;