import React, { useState } from 'react';

const SignUp = (props) => {
    const [memeberInfo, setMemberInfo] = useState({ name:"", email:"", password:"", repeatPassword:""});
    const submitHandler = (event) => {
        event.preventDefault();
        props.addPerson(memeberInfo);
    };

    const handleChange = (event) => {
        setMemberInfo({
            ...memeberInfo,
            [event.target.name]: event.target.value
        });
    }
    return (
        <div className="signUp">
            <h1>Sign up</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName" type="text" name="firstName" required />
                </div>
                <br />

                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName" type="text" name="lastName" required />
                </div>
                <br />
                <div>
                <label htmlFor="options">select one</label>
                <select id="status">
                    <option value="administrator">Administrator</option>
                    <option value="valunteer">Valunteer</option>
                    <option value="student">Student</option>
                </select>
                </div>
                <br />
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
                
                <div className="password">
                    <label htmlFor="password"> Repreat Password</label>
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

export default SignUp;