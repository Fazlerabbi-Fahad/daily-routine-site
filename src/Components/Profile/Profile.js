import React, { useState } from 'react';
import Personal from '../Personal/Personal';
import Time from '../Time/Time';

import './Profile.css'

const Profile = (props) => {
    const { classes } = props;
    let time = 0;
    for (const timing of classes) {
        time = time + timing.time;
    };

    const breakPoint = [{ id: 1, time: 5 },
    { id: 2, time: 10 },
    { id: 3, time: 15 },
    { id: 4, time: 20 }]


    return (
        <div className='profile-container'>
            <Personal></Personal>
            <Time time={time}></Time>
        </div>
    );
};

export default Profile;