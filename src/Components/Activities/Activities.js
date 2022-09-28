import React from 'react';
import './Activities.css'

const Activities = (props) => {
    console.log(props.activities);
    const { name, picture, time } = props.activities;
    return (
        <div className='activities'>
            <h1>Daily-Routine</h1>
            <p>Select today's activities</p>
            <div>
                <img src={picture} alt="" />
                <div>
                    <h2>Name: {name}</h2>
                    <h4>Time : {time}min</h4>
                </div>
            </div>
        </div>
    );
};

export default Activities;