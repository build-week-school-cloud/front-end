import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions';

export const initialState = {
    user: {},
    token: '',
    userType: '',
    error: '',
    registering: false,
    registered: false
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
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
                // user: action.payload
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                // error: action.payload
            }
        default:
            return state;
    }
}