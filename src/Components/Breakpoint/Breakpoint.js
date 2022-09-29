import React from 'react';
import { useState } from 'react';
import './Breakpoint.css';


const Breakpoint = () => {
    const [time, setTime] = useState([]);
    const addToPoint = (id) => {
        const time = id;
        setTime(time);

    }
    return (
        <div>
            <div className='break-container'>
                <button onClick={() => addToPoint(5)}>5</button>
                <button onClick={() => addToPoint(10)}>10</button>
                <button onClick={() => addToPoint(15)}>15</button>
                <button onClick={() => addToPoint(20)}>20</button>
                <button onClick={() => addToPoint(25)}>25</button>
            </div>
            <div className='breaktime'>
                <div className='break'>
                    <h3>Break Time :</h3>
                    <p>{time}<small>minutes</small></p>
                </div>
            </div>
        </div >
    );
};

export default Breakpoint;