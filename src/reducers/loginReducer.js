import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

export const initialState = {
    user: {},
    token: '',
    userType: '', 
    error: '',
    logging: false,
    login: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: '',
                logging: true,
                login: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                logging: false,
                login: true,
                // user: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                logging: false,
                error: action.payload
            }            
        default:
            return state;
    }
}