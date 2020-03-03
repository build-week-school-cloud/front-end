import axiosWithAuth from '../utils/axiosWithAuth';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";

export const login = user => dispatch => {
    dispatch({type: LOGIN_START})
    axiosWithAuth()
        .get(`/api/login`)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
}