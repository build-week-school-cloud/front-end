import React, { useState } from 'react';


const LogIn = (props) => {
    const [newMemberInfo, setNewMemberInfo] = useState({email: "", password: ""});
    const submitHandler = (event) => {
        event.preventDefault();
        props.addPerson(newMemberInfo);
    };

    const handleChange = (event) => {
        setNewMemberInfo({
            ...newMemberInfo,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="logIn">
            <h1>Log in</h1>
            <form onSubmit={submitHandler}>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={handleChange} placeholde="Email" required/>
                </div>
                <br />
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={handleChange} placeholde="Password" required/>
                </div>
                <br />
                <div className="submit">
                    <label htmlFor="submit"></label>
                    <input id="submit" type="submit" value="Submit" />
                </div>
            </form>
            
        </div>

    )
}

export default LogIn;