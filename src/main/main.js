import React from 'react';
import Note from '../note/note';
import Button from '../button/button';
import NotefulContext from '../NotefulContext';
import './main.css';

function Main(props) {
    return (
        <NotefulContext.Consumer>
            {(context) => (
            <section className='main'>
                <h2 className='main__heading'>Notes:</h2>
                    {context.notes.map((n, i) =>
                        <Note {...n} />
                    )}
                <Button buttonText='Add note' />
            </section>
            )}
        </NotefulContext.Consumer>
    )
}

Main.defaultProps = {
    notes: [],
}

export default Main;
