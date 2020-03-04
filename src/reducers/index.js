import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';

export const reducer = combineReducers({
    loginReducer,
    registerReducer
})

// export default reducer;