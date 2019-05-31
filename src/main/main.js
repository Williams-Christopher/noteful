import React from 'react';
import Note from '../note/note';
import Button from '../button/button';
import './main.css';

function Main(props) {
    let notes = props.notes.map((n, i) =>
        <Note {...n} />
    );

    return (
        <section className='main'>
            <h2 className='main__heading'>Notes:</h2>
            {notes}
            <Button buttonText='Add note' />
        </section>
    )
}

Main.defaultProps = {
    notes: [],
}

export default Main;
