import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TeachersList from './teachers';
import Form from './StudentSearch';
import { Link, Route } from 'react-router-dom';



const Header = styled.h1`
padding:.3rem;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87,
-1.5px 0 0 #003F87; 
letter-spacing: 1px;
font-size:3rem;
color:#00B2EE;
`
const CustomNav = styled.nav`
display:flex; 
justify-content: space-evenly;
`




function StudentView(){
    
const [teachers, setTeachers] = useState({name:['jim', 'tim', 'will', 'bill', 'dylan', 'steph', 'mike', 'ben', 'howard', 'stern', 'jacob', 'alex', 'mark', 'dev']});
// const [displayed , setDisplayed] = useState([]);
// const [input, setInput] = useState('');
    // useEffect(()=>{
    //     axios.get('url').then(res => {
    //         const teacher = res.filter( teacher => {
    //             teacher.name.toLowerCase().includes(Search.toLowerCase())
    //         })
    //                 setUserInfo(res);
    //                 // setToDo(res);
    //             }).catch(err => console.log(err))

    // })
//    const inputChange = e => {
//         setInput(e.target.value);

//         const search = teachers.name.filter( teacher => teacher.toLowerCase().includes(input.toLowerCase()))

//         setDisplayed(search)
//     }

    return(
        <div>
            <Header>Welcome Back Name!</Header>
            <CustomNav>
                <Link to='/student/:id'>Profile</Link>
                <Link to='/student/:id/search-teachers'>Search for Teachers</Link>
            </CustomNav>
            <Route path='/student/:id/search-teachers'>
                <Form/>
                <TeachersList teachers={teachers} />
            </Route>
        </div>
    )
}

export default StudentView;