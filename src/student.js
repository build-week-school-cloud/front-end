import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TeachersList from './teachers'
const SearchInput = styled.input`
width:50%;
margin:1rem;
`



function StudentView(){
    
const [teachers, setTeachers] = useState({name:['jim', 'tim', 'will', 'bill', 'dylan', 'steph', 'mike', 'ben', 'howard', 'stern', 'jacob', 'alex', 'mark', 'dev']});
const [displayed , setDisplayed] = useState([]);
const [input, setInput] = useState('');
    // useEffect(()=>{
    //     axios.get('url').then(res => {
    //         const teacher = res.filter( teacher => {
    //             teacher.name.toLowerCase().includes(Search.toLowerCase())
    //         })
    //                 setUserInfo(res);
    //                 // setToDo(res);
    //             }).catch(err => console.log(err))

    // })
   const inputChange = e => {
        setInput(e.target.value);

        const search = teachers.name.filter( teacher => teacher.toLowerCase().includes(input.toLowerCase()))

        setDisplayed(search)
    }
    console.log(displayed)
    return(
        <div>
            <h1>Welcome Name!</h1>
            <form>
                <label htmlFor='search'>
                    <SearchInput onChange={inputChange} className='search' type='text' name='search' id='search' value={input}/>
                    Search Teachers
                </label>
            </form>
            <TeachersList teachers={teachers} />
        </div>
    )
}

export default StudentView;