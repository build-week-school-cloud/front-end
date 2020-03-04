import React from "react";
import styled from "styled-components";

export default function VolunteerProfile(props) {

  const VolunteerProfileStyle= styled.div `
    background: #efefef;
    border: 1px solid #bfbfbf;
    padding: 20px;
    margin: 10px;
    height: 200px;
    width: 100px;
    border-radius: 10px;
  `
  return (
    
    <VolunteerProfileStyle>
    <div className="displayCard">    
    
      <p>{props.name}</p>
      <p>{props.subject}</p>
      <p>{props.country}</p>
      <p>{props.timeAvaliable}</p>
    </div>
     
    </VolunteerProfileStyle>
    
  )
}