import React from 'react';

const Volunteer = () => {
    const toDoList = [
        "Prepare notes",
        "Check attence",
        "Upload class materials",
        "Help student to do homework",
        "Make sure student understand pronblems"
    ];

    
    return (
        <div className="volunteer">
            <h1>Volunteer</h1>
            <h3>To Do List</h3>
            {toDoList.map( item => <div className="item"><input type="checkbox" />{item}</div>)}
        </div>
    )
}

export default Volunteer;

           