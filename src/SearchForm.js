import React, { useState } from "react";

export default function SearchForm(props) {
  const onSearchChanged = (event) => {
    props.setSearchText(event.target.value);
  }
 
  return (
    <section className="search-form">
     <form style={{marginLeft: "10px"}}>
       <input id="search" name="textfield" type="text" placeholder="Search"
        onChange={onSearchChanged}
        value={props.searchText}></input>
     </form>
    </section>
  );
}