import React, { useState } from 'react';

const SignUp = (props) => {
    const [memberInfo, setMemberInfo] = useState({ firstName:"", lastName:"", email:"", password:"", repeatPassword:"", status:"", country:""});
    const submitHandler = (event) => {
        event.preventDefault();
        props.addPerson(memberInfo);
    };

    const handleChange = (event) => {
        setMemberInfo({
            ...memberInfo,
            [event.target.id]: event.target.value
        });
    }

    const countyStyle = memberInfo.status === "volunteer" ? { display: "block"} : { display: "none"};

    return (
        <div className="signUp">
            <h1>Sign up</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName" type="text" name="firstName"  onChange={handleChange} required />
                </div>
                <br />

                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName" type="text" name="lastName"  onChange={handleChange} required />
                </div>
                <br />
                <div>
                <label htmlFor="status">select one</label>
                <select id="status"  onChange={handleChange}>
                    <option value="administrator">Administrator</option>
                    
                    <option value="volunteer">Volunteer</option>
                   
                    <option value="student">Student</option>
                </select>
                </div>
                    <div style={countyStyle}>
                    <br />
                    <label htmlFor="country">Country</label>
                    <select id="country" onChange={handleChange}>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">USA</option>
                        <option value="China">Canada</option>
                    </select>
                </div>
                <br />
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={handleChange} placeholder="Email" required/>
                </div>
                <br />
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={handleChange} placeholder="Password" required/>
                </div>
                <br />
                
                <div className="password">
                    <label htmlFor="password"> Repeat Password</label>
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