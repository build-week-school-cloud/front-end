import React from 'react';
import ProfilePhoto from './profile.jpg';
import styled from 'styled-components';

const ProfileImg = styled.img`
border-radius: 1rem;
border: #003F87 1px solid;
margin: 1rem;
`
const CardItems = styled.div`
padding: 1rem;
`
const CardItem2 = styled.div`
padding: 1rem;
text-shadow:none;
color:#00B2EE;
`
const Card= styled.div`
Margin: 2rem;
box-shadow: 3px 3px 3px 3px lightgrey;
width: 40%;
padding:1rem;
border-radius: 10px;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87,
-1.5px 0 0 #003F87; 
letter-spacing: 2px;
font-size:1.3rem;
color:#00B2EE;
`

function VolunteerProfile(props){
    return (
        <Card>
            <h2>Full Name here</h2>
            <ProfileImg src={ProfilePhoto}/>
            <CardItems>Username here</CardItems>
            <CardItem2><a href='#'>Edit Profile</a></CardItem2>
        </Card>
    )
}


export default VolunteerProfile;