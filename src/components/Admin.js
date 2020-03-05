import React, {useState, useEffect}from 'react';
import axios from 'axios';
import styled from 'styled-components'
import TeachersEdit from './Admin-Teacher-Edit';
import {Link, Route } from 'react-router-dom';
import AdminProfile from './Admin-Profile';
import Login from './Login';
import './Links.css';
import axiosWithAuth from '../utils/axiosWithAuth';

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

    const [toDo, setToDo] = useState([]);

    useEffect(()=>{
        axiosWithAuth().get('https://cloudschoolbw.herokuapp.com/api/admin').then(res => {
            console.log(res)
            setToDo(res.data)
        }).catch(err => console.log(err))
       }, [])
    
    
    return(
        <CustomizeContainer>
            <Header>Welcome Back Name!</Header>
            <CustomNav>
                <Link className='links nestedlink' to='/admin'>Profile</Link>
                <Link className='links nestedlink' to='/admin/edit-volunteer-list'>Edit Teachers to do List</Link>
                <Link className='links nestedlink' to='/'>Logout</Link>
            </CustomNav>
            <Route exact path='/'>
                <Login/>
            </Route>
            <Route exact path='/admin'>
                <AdminProfile/>
            </Route>
            <Route path='/admin/edit-volunteer-list'>
                <TeachersEdit toDo={toDo}/>
            </Route>   
        </CustomizeContainer>
    )
}

export default AdminView;