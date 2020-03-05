import axiosWithAuth from '../utils/axiosWithAuth';
// import axios from 'axios';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";
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
export const SET_USER = "SET_USER"

export const login = user => dispatch => {
    dispatch({type: LOGIN_START})
    console.log('User:', user)
    axiosWithAuth()
        .post(`/auth/login`, user)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            dispatch({ type: SET_USER, payload: user})
            console.log('login response', res);
            window.localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            console.log('login error', err)
            dispatch({type: LOGIN_FAILURE, payload: err})
        });
}

export const register = user => dispatch => {
    dispatch({type: REGISTER_START})
    axiosWithAuth()
        .post(`/auth/register`, user)
        .then(res => {
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
            console.log('register response', res)
            window.localStorage.setItem('token', res.data.password)
        })
        .catch(err => {
            dispatch({type: REGISTER_FAILURE, payload: err})
        })
}

export const fetchAdmin = () => dispatch => {
    dispatch({type: FETCH_ADMIN_DATA})
    axiosWithAuth()
        .get('/admin')
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_ADMIN_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_ADMIN_DATA_FAILURE, payload: err})
        })
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