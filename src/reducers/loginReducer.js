import { FETCH_ADMIN_DATA, FETCH_ADMIN_DATA_SUCCESS, FETCH_ADMIN_DATA_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE, SET_USER } from '../actions';

export const initialState = {
    welcomeMessage: '',
    username: '',
    token: '',
    userType: '', 
    error: '',
    logging: false,
    login: false,
    registering: false,
    registered: false,
    fetching: false,
    adminData: []
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: '',
                logging: true,
                login: false,
                token: '',
                userType: '',
                adminData: []
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                logging: false,
                login: true,
                token: action.payload.token,
                userType: action.payload.user_role,
                welcomeMessage: action.payload.message
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                logging: false,
                error: action.payload
            }
        case REGISTER_START:
            return {
                ...state,
                error: '',
                registering: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                registered: true,
                token: action.payload.password,
                userType: action.payload.role,
                login: true,
                username: action.payload.username
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                error: action.payload
            }
        case FETCH_ADMIN_DATA:
            return {
                ...state,
                fetching: true,
                error: ''
            }
        case FETCH_ADMIN_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                adminData: action.payload
            }
        case FETCH_ADMIN_DATA_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case SET_USER:
            return {
                ...state,
                username: action.payload.username
            }
        default:
            return state;
    }
}