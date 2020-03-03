import React from 'react';
import styled from 'styled-components';

const Labeled = styled.label`
padding:.3rem;
text-shadow: -1.5px -1.5px 0 #003F87, 1.5px 1.5px 0 #003F87, 0 -1.5px 0 #003F87,
0 1.5px 0 #003F87, 1.5px -1.5px 0 #003F87, -1.5px 1.5px 0 #003F87, 1.5px 0 0 #003F87,
-1.5px 0 0 #003F87; 
letter-spacing: 1px;
font-size:2rem;
color:#00B2EE;
`
const SearchInput = styled.input`
width:50%;
margin:1rem;
`



function Form(){
    return (
        <form>
            <Labeled htmlFor='search'>
                <SearchInput className='search' type='text' name='search' id='search' />
                Search
            </Labeled>
        </form>
    )
}

export default Form; 