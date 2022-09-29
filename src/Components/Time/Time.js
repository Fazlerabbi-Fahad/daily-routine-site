import React from 'react';
import './Time.css'

const Time = (props) => {
    console.log(props);
    const { time } = props;
    return (
        <div>
            <div className='time-container'>
                <h3>Time Maintain</h3>
                <div className='time'>
                    <h3>Class Time :</h3>
                    <p>{time}<small>minutes</small></p>
                </div>
            </div>
        </div>
    );
};

export default Time;