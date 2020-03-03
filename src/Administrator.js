import React, { useState } from 'react';

const Administrator = () => {
    const toDoList = [
        "Prepare notes",
        "Check attence",
        "Upload class materials",
        "Help student to do homework",
        "Make sure student understand pronblems"
    ];
    const [list, setList] = useState(toDoList);
    const [newItem, setNewItem] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        const newList = [...list, newItem];
        setList(newList);
    };

    const onChangeHandler = (event) => {
        setNewItem(event.target.value);
    };
    


    return (
        <div className="administrator">
            <h1>Administrator</h1>
            <h3>Todo List</h3>
            {list.map( item => <div className="item">{item} </div> )  }
            <form onSubmit={submitHandler}>
                <input onChange={onChangeHandler} id="add" type="text" />
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default Administrator;