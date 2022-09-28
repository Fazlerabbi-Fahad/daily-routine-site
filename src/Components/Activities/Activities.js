import React from 'react';
import './Activities.css'

const Activities = (props) => {

    const { name, picture, time } = props.activities;
    return (
        <div className='activities'>

            <div>
                <img src={picture} alt="" />
                <div className='activities-name'>
                    <h4>Name: {name}</h4>
                    <h5>Time : {time}min</h5>
                </div>
            </div>
            <button onClick={() => { props.addActivity(props.activities) }} className='btn-cart'>
                <p>I will do this</p>
            </button>
        </div>
    );
};

export default Activities;