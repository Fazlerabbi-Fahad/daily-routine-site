
import Breakpoint from '../Breakpoint/Breakpoint';
import Personal from '../Personal/Personal';
import Time from '../Time/Time';

import './Profile.css'

const Profile = (props) => {
    const { classes } = props;

    let time = 0;
    for (const timing of classes) {
        time = time + timing.time;
    }
    return (
        <div className='profile-container'>
            <Personal></Personal>
            <Time time={time}></Time>
            <Breakpoint></Breakpoint>


        </div>
    );
};

export default Profile;