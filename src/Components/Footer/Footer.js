import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <ol>
                <li><h3>How does react work?</h3>
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p></li>
                <li><h3>Difference between props and state?</h3>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p></li>
                <li><h3>What useEffect do?</h3><p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p></li>
            </ol>
        </div>
    );
};

export default Footer;