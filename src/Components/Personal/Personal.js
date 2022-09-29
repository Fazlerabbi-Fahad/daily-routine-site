import React from 'react';
import image from '../../image/image.jpg'
import './Personal.css'
const Personal = () => {
    return (
        <div>
            <div className='personal'>
                <img src={image} alt="" />
                <div className='personal-text'>
                    <h3>Fazle Rabbi Fahad</h3>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='personal-info'>
                <div>
                    <h3>55<small>kg</small></h3>
                    <h5>Weight</h5>
                </div>
                <div>
                    <h3>5.7</h3>
                    <h5>Height</h5>
                </div>
                <div>
                    <h3>22<small>yrs</small></h3>
                    <h5>Age</h5>
                </div>
            </div>
        </div>
    );
};

export default Personal;