import React from 'react'
import { login } from '../actions'
import { connect } from 'react-redux';
import axios from 'axios'

function Test(props) {
    const handleClick = e => {
        e.preventDefault();
        // props.login(user);
        axios
            .post('https://cloudschoolbw.herokuapp.com/api/auth/register', user)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    const user = {full_name: 'tyler de friess', username: 'tyler', password: 'password', role: 'student', email:'t@t.com', phone: '7778885555'}
    return (
        <>
          <button onClick={handleClick}>Log in</button>  
        </>
    )
}

const mapStateToProps = state => {
    return {
        login: false
    }
}

export default connect(
    mapStateToProps,
    {login}
)(Test);