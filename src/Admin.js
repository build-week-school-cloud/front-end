import React, {useState, useEffect}from 'react';
import axios from 'axios';
import styled from 'styled-components'
import TeachersEdit from './Admin-teacher-edit';
import {Link, Route } from 'react-router-dom';
import AdminProfile from './Admin-profile';
import Login from './Login';

const CustomNav = styled.nav`
display:flex; 
justify-content: space-around;
width: 100%;
`
const Header = styled.h1`
padding:.3rem;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87,
-1.5px 0 0 #003F87; 
letter-spacing: 1px;
font-size:2.5rem;
color:#00B2EE;
`
const CustomizeContainer = styled.div`
display:flex; 
flex-direction: column;
align-items: center;
`

function AdminView(){
    const [teachers, setTeachers] = useState({name:['jim', 'tim', 'will', 'bill', 'dylan', 'steph', 'mike', 'ben', 'howard', 'stern', 'jacob', 'alex', 'mark', 'dev']});
    return(
        <CustomizeContainer>
            <Header>Welcome Back Name!</Header>
            <CustomNav>
                <Link to='/admin/:id'>Profile</Link>
                <Link to='/admin/:id/edit-volunteer-list'>Edit Teachers to do List</Link>
                <Link to='/'>Logout</Link>
            </CustomNav>
            <Route exact path='/'>
                <Login/>
            </Route>
            <Route exact path='/admin/:id'>
                <AdminProfile/>
            </Route>
            <Route path='/admin/:id/edit-volunteer-list'>
                <TeachersEdit teachers={teachers}/>
            </Route>    
        </CustomizeContainer>
    )
}

export default AdminView;