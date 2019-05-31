import React from 'react';
import Note from '../note/note';
import Button from '../button/button';
import './main.css';

function Main(props) {
    console.log('Main');
    let notes = props.notes.map((n, i) =>
        <Note {...n} />
    );

    return (
        <section className='main'>
            <h1>Main placeholder</h1>
            {/* <p>Dynamic route: {props.match.params.dynamic}</p> */}
            {notes}
            <Button buttonText='Add note' />
        </section>
    )
}

Main.defaultProps = {
    notes: [],
}

export default Main;