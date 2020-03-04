import React from 'react';

const Volunteer = () => {
    const toDoList = [
        "Prepare notes",
        "Check attence",
        "Upload class materials",
        "Help student to do homework",
        "Make sure student understand pronblems"
    ];

    const handleSubmit = (form) => {
        form.reset();
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <div className="volunteer">
            <h1>Volunteer</h1>
            <h3>To Do List</h3>
            {toDoList.map( item => <div className="item"><input type="checkbox" />{item}</div>)}
            <div className="complete">
                <labe htmlFor="complete"></labe>
            <input id="complete" type="submit" value="Complete" />
            </div>
        </div>
        </form>
    )
}

export default Volunteer;

           