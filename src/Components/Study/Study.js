import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Profile from '../Profile/Profile';
import './Study.css';

const Study = () => {
    const [activities, setActivities] = useState([]);
    const [classes, setClasses] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);


    const addActivity = (selectedActivity) => {
        const newClasses = [...classes, selectedActivity];
        setClasses(newClasses);
    };
    return (
        <div className='study'>
            <div className='activity'>
                <h1>Daily-Routine</h1>
                <p>Select today's activities</p>
                <div className='activity-container'>

                    {
                        activities.map(activities => <Activities
                            key={activities.id}
                            activities={activities}
                            addActivity={addActivity}
                        >
                        </Activities>)
                    }
                </div>
            </div>
            <div>
                <Profile
                    classes={classes}>

                </Profile>
            </div>
        </div>
    );
};

export default Study;