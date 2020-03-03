import React, {useState, useEffect}from 'react';
import axios from 'axios';
import styled from 'styled-components'
import TeachersEdit from './Admin-teacher-edit';
import {Link, Route } from 'react-router-dom';

const CustomNav = styled.nav`
display:flex; 
justify-content: space-evenly;
`
const Header = styled.h1`
padding:.3rem;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
	0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87,
    -1.5px 0 0 #003F87; 
letter-spacing: 1px;
font-size:3rem;
color:#00B2EE;
`

function AdminView(){
    const [teachers, setTeachers] = useState({name:['jim', 'tim', 'will', 'bill', 'dylan', 'steph', 'mike', 'ben', 'howard', 'stern', 'jacob', 'alex', 'mark', 'dev']});
    return(
        <div>
            <Header>Welcome back Name!</Header>
            <CustomNav>
                <Link to='/admin/:id'>Profile</Link>
                <Link to='/admin/:id/edit-volunteer-list'>Edit Teachers to do List</Link>
            </CustomNav>
            <Route path='/admin/:id/edit-volunteer-list'>
            <TeachersEdit teachers={teachers}/>
            </Route>
            
        </div>
    )
}

export default AdminView;