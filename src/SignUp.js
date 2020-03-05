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
    const validate = ({firstName, lastName, email, password}) => {
        const errors = {};
        //validating firstName
        if (!firstName) {
            errors.firstName = "You need a first name";
        }
        //validating lastName
        if (!lastName) {
            errors.lastName = "You need a last name";
        }
        //validating email
        if (!email) {
            errors.email = "You need an email address";
        }
        //validating password
        if (!password) {
            errors.password = "You need a password";
        }
    }

    const countryStyle = memberInfo.status === "volunteer" ? { display: "block"} : { display: "none"};

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
                    <div style={countryStyle}>
                    <br />
                    <label htmlFor="country">Country</label>
                    <select id="country" onChange={handleChange}>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">USA</option>
                        <option value="China">Canada</option>
                    </select>
                </div>
                
                <div style={countryStyle}>
                <br />
                    <label htmlFor="subject">select subject(s)</label>
                    <select id="subject" onChange={handleChange}>
                        <option value="math">Math</option>
                        <option value="english">English</option>
                        <option value="chinese">Chinese</option>
                        <option value="piano">Piano</option>
                        <option value="java">Java</option>
                        <option value="js">JS</option>
                        <option value="css">CSS</option>
                        <option value="react">React</option>

                    </select>
                </div>
                
                <div style={countryStyle}>
                    <br />
                    <label htmlFor="start_time">Avaliable start at</label>
                    <select id="start_time" onChange={handleChange}>
                        <option value="8:00am">8:00am</option>
                        <option value="9:00am">9:00am</option>
                        <option value="10:00am">10:00am</option>
                        <option value="11:am">11:00am</option>
                        <option value="3:00pm">3:00pm</option>
                        <option value="4:00pm">4:00pm</option>
                        <option value="5:00pm">5:00pm</option>
                        <option value="6:00pm">6:00pm</option>
                        <option value="7:00pm">7:00pm</option>
                    </select>
                    <br />
                </div>

                <div style={countryStyle}>
                    <br />
                    <label htmlFor="end_time">Avaliable end at</label>
                    <select id="end_time" onChange={handleChange}>
                        <option value="9:00am">9:00am</option>
                        <option value="10:00am">10:00am</option>
                        <option value="11:00am">11:00am</option>
                        <option value="12:00pm">12:00pm</option>
                        <option value="3:00pm">3:00pm</option>
                        <option value="4:00pm">4:00pm</option>
                        <option value="5:00pm">5:00pm</option>
                        <option value="6:00pm">6:00pm</option>
                        <option value="7:00pm">7:00pm</option>
                        <option value="8:00pm">8:00pm</option>
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