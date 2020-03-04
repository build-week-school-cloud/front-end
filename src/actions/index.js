import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

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
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";

export const login = user => dispatch => {
    dispatch({type: LOGIN_START})
    console.log('User:', user)
    axiosWithAuth()
        .post(`https://cloudschoolbw.herokuapp.com/api/auth/login`, {user})
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
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