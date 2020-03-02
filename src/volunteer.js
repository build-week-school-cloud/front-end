import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ToDoList from './ToDoList';
import styled from 'styled-components';

const Header = styled.h1`
padding:.3rem;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
	0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87,
    -1.5px 0 0 #003F87; 
letter-spacing: 1px;
font-size:3rem;
color:#00B2EE;
`


function VolunteerView(){
const [userinfo, setUserInfo] = useState([]);
const [toDo, setTodo] = useState([]);
const movies = [
	{
		id: 0,
		title: 'The Godfather',
		description: 'jdj jdjdsnbwshjbwdc c dhicb werhc wrhcb er h vchwer choeurb vher cghuoer cqqeruhc qrgu cqhugec hurq cghuqe hc erqug chure cqguhe crhqe chjqw ouc qrewhc qo3',
		due_date: 100,
		stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
	},
	{
		id: 1,
		title: 'Star Wars',
		description: 'jdj jdjdsnbwshjbwdc c dhicb werhc wrhcb er h vchwer choeurb vher cghuoer cqqeruhc qrgu cqhugec hurq cghuqe hc erqug chure cqguhe crhqe chjqw ouc qrewhc qo3',
		due_date: 92,
		stars: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
	},
	{
		id: 2,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		description: 'jdj jdjdsnbwshjbwdc c dhicb werhc wrhcb er h vchwer choeurb vher cghuoer cqqeruhc qrgu cqhugec hurq cghuqe hc erqug chure cqguhe crhqe chjqw ouc qrewhc qo3',
		due_date: 92,
		stars: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
	},
	{
		id: 3,
		title: 'Terminator 2: Judgement Day',
		description: 'jdj jdjdsnbwshjbwdc c dhicb werhc wrhcb er h vchwer choeurb vher cghuoer cqqeruhc qrgu cqhugec hurq cghuqe hc erqug chure cqguhe crhqe chjqw ouc qrewhc qo3',
		due_date: 94,
		stars: ['Arnold Schwarzenegger', 'Edward Furlong', 'Linda Hamilton'],
	},
	{
		id: 4,
		title: 'Dumb and Dumber',
		description: 'jdj jdjdsnbwshjbwdc c dhicb werhc wrhcb er h vchwer choeurb vher cghuoer cqqeruhc qrgu cqhugec hurq cghuqe hc erqug chure cqguhe crhqe chjqw ouc qrewhc qo3',
		due_date: 76,
		stars: ['Jim Carrey', 'Jeff Daniels', 'Lauren Holly'],
	},
	{
		id: 5,
		title: 'Tombstone',
		description: 'jdj jdjdsnbwshjbwdc c dhicb werhc wrhcb er h vchwer choeurb vher cghuoer cqqeruhc qrgu cqhugec hurq cghuqe hc erqug chure cqguhe crhqe chjqw ouc qrewhc qo3',
		due_date: 89,
		stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
	},
];


    // useEffect(()=>{
    //     axios.get('url').then(res => {
    //         setUserInfo(res);
    //         // setToDo(res);
    //     }).catch(err => console.log(err))
    // })

    return(
        <div className='container'>
            <Header>Welcome Back Name!</Header>
            <ToDoList toDoList={movies} />
        </div>
    )
}

export default VolunteerView;