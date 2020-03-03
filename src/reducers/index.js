import { USER_LOGIN } from '../actions';

export const initialState = {
    user: '',
    token: '',
    userType: '', 

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}