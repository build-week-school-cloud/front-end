import axiosWithAuth from '../utils/axiosWithAuth';
import React from 'react';
import axios from 'axios';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const FETCH_ADMIN_DATA = "FETCH_ADMIN_DATA";
export const FETCH_ADMIN_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_ADMIN_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_STUDENT_DATA = "FETCH_ADMIN_DATA";
export const FETCH_STUDENT_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_STUDENT_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_VOLUNTEER_DATA = "FETCH_ADMIN_DATA";
export const FETCH_VOLUNTEER_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_VOLUNTEER_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const UPDATE_DATA = "UPDATE_DATA";
export const UPDATE_TODO_START = "UPDATE_TODO_START"
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS"
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE"
export const SET_USER = "SET_USER"
export const DELETE_TODO_START = "DELETE_TODO_START"
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS"
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE"
export const ADD_TODO_START = "ADD_TODO_START"
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS"
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE"


export const updateTodo = todo => dispatch => {
    dispatch({type: UPDATE_TODO_START})
    console.log(todo.id);
    axiosWithAuth()
        .put(`/admin/${todo.id}`, todo)
        .then(res => {
            console.log('update response', res)
            dispatch({type: UPDATE_TODO_SUCCESS})
        })
        .err(err => {
            console.log(err)
            dispatch({type: UPDATE_TODO_FAILURE})
        })
}

export const login = user => dispatch => {
    dispatch({type: LOGIN_START})
    console.log('User:', user)
    axios
        .post(`https://cloudschoolbw.herokuapp.com/api/auth/login`, user)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            dispatch({ type: SET_USER, payload: user})
            console.log('login response', res);
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user_id', res.data.user_id)
            localStorage.setItem('user_role', res.data.user_role)
            localStorage.setItem('welcome_message', res.data.message)
        })
        .catch(err => {
            console.log('login error', err)
            dispatch({type: LOGIN_FAILURE, payload: err})
        })
        .finally(() => {
            // window.location = `/${localStorage.getItem('user_role')}`
        });
}

export const register = user => dispatch => {
    console.log(user);
    dispatch({type: REGISTER_START})
    axios
        .post(`https://cloudschoolbw.herokuapp.com/api/auth/register`, user)
        .then(res => {
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
            console.log('register response', res)
            // login({username: user.username, password: user.password});            
        })
        .catch(err => {
            dispatch({type: REGISTER_FAILURE, payload: err})
        })
}

export const fetchAdmin = () => dispatch => {
    dispatch({type: FETCH_ADMIN_DATA})
    // axiosWithAuth()
    //     .get('/admin')
    //     .then(res => {
    //         console.log(res);
    //         dispatch({type: FETCH_ADMIN_DATA_SUCCESS, payload: res.data});            
    //     })
    //     .catch(err => {
    //         dispatch({type: FETCH_ADMIN_DATA_FAILURE, payload: err})
    //     })
}

export const fetchAdminSuccess = (data) => dispatch => {
    dispatch({type: FETCH_ADMIN_DATA_SUCCESS, payload: data})
}

export const fetchAdminFailure = (err) => dispatch => {
    dispatch({type: FETCH_ADMIN_DATA_FAILURE, payload: err})
}

export const fetchStudent = () => dispatch => {
    dispatch({type: FETCH_STUDENT_DATA})
    axiosWithAuth()
        .get('/student')
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_STUDENT_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_STUDENT_DATA_FAILURE, payload: err})
        })
}

export const fetchVolunteer = () => dispatch => {
    dispatch({type: FETCH_VOLUNTEER_DATA})
    axiosWithAuth()
        .get('/volunteer')
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_VOLUNTEER_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_VOLUNTEER_DATA_FAILURE, payload: err})
        })
}

export const deleteTodo = () => dispatch => {
    dispatch({type: DELETE_TODO_START})
}

export const deleteTodoSuccess = (data) => dispatch => {
    dispatch({type: DELETE_TODO_SUCCESS, payload: data})
}

export const deleteTodoFailure = (err) => dispatch => {
    dispatch({type: DELETE_TODO_FAILURE, payload: err})
}

export const addTodoStart = () => dispatch => {
    dispatch({type: ADD_TODO_START})
}

export const addTodoSuccess = (data) => dispatch => {
    dispatch({type: ADD_TODO_SUCCESS, payload: data})
}

export const addTodoFailure = (err) => dispatch => {
    dispatch({type: ADD_TODO_FAILURE, payload: err})
} 