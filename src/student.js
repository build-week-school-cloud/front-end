import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TeachersList from './teachers';

const SearchInput = styled.input`
width:50%;
margin:1rem;
`
const Header = styled.h1`
padding:.3rem;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
	0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87,
    -1.5px 0 0 #003F87; 
letter-spacing: 1px;
font-size:3rem;
color:#00B2EE;
`
const Labeled = styled.label`
padding:.3rem;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
	0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87,
    -1.5px 0 0 #003F87; 
letter-spacing: 1px;
font-size:2rem;
color:skyblue;

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
            <form>
                <Labeled htmlFor='search'>
                    <SearchInput className='search' type='text' name='search' id='search' />
                    Search
                </Labeled>
            </form>
            <TeachersList teachers={teachers} />
        </div>
    )
}

export default StudentView;