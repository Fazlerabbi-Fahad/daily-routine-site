import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import './Study.css';

const Study = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);
    return (
        <div className='study'>
            <div className='activity'>
                <h1>Daily-Routine</h1>
                <p>Select today's activities</p>
                <div className='activity-container'>

                    {
                        activities.map(activities => <Activities
                            activities={activities}
                            key={activities.id}

                        >
                        </Activities>)
                    }
                </div>
            </div>
            <div>
                <p>gdvvd</p>
            </div>
        </div>
    );
};

export default Study;