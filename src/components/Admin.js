import React, {useState, useEffect}from 'react';
import axios from 'axios';
import styled from 'styled-components'
import TeachersEdit from './Admin-Teacher-Edit';
import {Link, Route } from 'react-router-dom';
import AdminProfile from './Admin-Profile';
import Login from './Login';
import './Links.css';
import axiosWithAuth from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { fetchAdmin } from '../actions';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

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

function AdminView(props){

    const [toDo, setToDo] = useState([]);
    const [itemToEdit, setItemToEdit] = useState({});

    useEffect(()=>{
        // setToDo(props.fetchAdmin())
        console.log(toDo)        
        axiosWithAuth(localStorage.getItem('token'))        
            .get('https://cloudschoolbw.herokuapp.com/api/admin')
            .then(res => {
                let newArray = res.data
                setToDo(newArray)
            })
            .catch(err => console.log(err))
    }, [])

    // useEffect(() => {
    //     console.log('useeffect', props.adminData)
    //     return
    // }, [props.adminData])
    
    const handleClick = e => {
        e.persist();
        const id = e.currentTarget.id
        console.log(e);
    }

    const handleDelete = e => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`/admin/${e.target.id}`)
            .then(res => {
                console.log('Delete response', res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    return(
        <CustomizeContainer>
            <Header>{localStorage.getItem('welcome_message')}</Header>
            <CustomNav>
                {/* <Link className='links nestedlink' to='/admin'>Profile</Link> */}
                {/* <Link className='links nestedlink' to='/admin/edit-volunteer-list'>Edit Teachers to do List</Link> */}
                {/* <Link className='links nestedlink' to='/'>Logout</Link> */}
            </CustomNav>
            <Route exact path='/'>
                <Login/>
            </Route>
            <Route exact path='/admin'>
                <AdminProfile/>
            </Route>
            <Route path='/admin/edit-volunteer-list'>
                <TeachersEdit toDo={props.adminData}/>
            </Route>
            <TodoItem handleClick={handleClick} handleDelete={handleDelete} todoList={toDo} />
            <AddTodo />
        </CustomizeContainer>
    )
}

const mapStateToProps = state => {
    return {
        welcomeMessage: state.welcomeMessage,
        adminData: state.adminData,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchAdmin }
)(AdminView);