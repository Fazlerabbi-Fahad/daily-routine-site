import React from 'react';

const Profile = (props) => {
    const { classes } = props;
    let time = 0;
    for (const timing of classes) {
        time = time + timing.time;
    };
    return (
        <div>
            Exercise:{time};
        </div>
    );
};

export default Profile;