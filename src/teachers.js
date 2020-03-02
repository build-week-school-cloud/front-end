import React from 'react';

function TeacherList({teachers}){
    return(
    <div>
        {teachers.name.map(teacher => (
            <div key={teacher}>
                <h2>Name: {teacher}</h2>
                <div>Subject: Math</div>
                <div>Times_available: 2pm-6pm mon-fri </div>
                <div>Location: Philly</div>
                <button>Request Help</button>
            </div>
        ))}

    </div>)
}

export default TeacherList;