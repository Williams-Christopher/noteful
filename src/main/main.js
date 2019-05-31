import React from 'react';
import Button from '../button/button';
import './main.css';

function Main(props) {
    return (
        <section className='main'>
            <h1>Main placeholder</h1>
            {/* <p>Dynamic route: {props.match.params.dynamic}</p> */}
            <Button buttonText='Add note' />
        </section>
    )
}

export default Main;