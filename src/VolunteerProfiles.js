import React, { useEffect, useState } from "react";
import axios from "axios";
import {dummyData} from "./dummy-data";
import VolunteerProfile from "./VolunteerProfile";
import SearchForm from "./SearchForm";

export default function VolunteerProfiles(props) {
  // TODO: Add useState to track data from useEffect
  // const [profiles, setProfiles] = useState(dummyData);
  // const [originalProfiles, setOriginalProfiles] = useState(dummyData);
  // const [searchText, setSearchText] = useState("");

  const [profiles, setProfiles] = useState([]);
  const [originalProfiles, setOriginalProfiles] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    const getList = () => {
      axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data);
        setProfiles(response.data.results);
        setOriginalProfiles(response.data.results);
      })
      .catch(error => {
        console.log("Server Error", error);
      })
    }
    getList();
  }, []);

  useEffect(() => {
    const results = originalProfiles.filter(character =>
      character.name.toLowerCase().includes(searchText.toLowerCase()));
      
      setProfiles(results);
  }, [searchText]);

  const setSearch = (s) => {
    setSearchText(s);
  }

  return (
    
    <div>
      <SearchForm setSearchText={setSearch} searchText={searchText} />
      <section className="character-list">
        <div className="displayCards">
        {profiles.map(person => (
          <VolunteerProfile 
            name={person.name}
            subject={person.subject} 
            country={person.country}
            timeAvaliable={person.timeAvaliable} />

        ))}
        </div>
      </section>
    </div>

  
  );
}