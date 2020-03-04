import React from 'react'
import { login, register } from '../actions'
import { connect } from 'react-redux';
import axios from 'axios'

function Test(props) {
    const handleClick = e => {
        e.preventDefault();
        props.register(user);
        // axios
        //     .post('https://cloudschoolbw.herokuapp.com/api/auth/register', user)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => console.log(err));
    }

    const user = {full_name: 'tyler', username: 'tylerdf', password: 'password1', role: 'student', email:'td@t.com', phone: '7778885556'}
    return (
        <>
          <button onClick={handleClick}>Log in</button>  
        </>
    )
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

export default connect(
    mapStateToProps,
    {login, register}
)(Test);