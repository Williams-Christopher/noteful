import React from 'react';
import Button from '../button/button';
import './note.css';

function convertDateTime(utcDate){
    return new Date(utcDate).toDateString();
}

function Note(props) {
    return(
        <article className='note'>
            <div className='note__summary'>
                <h1>{props.name}</h1>
                <p>Modified {convertDateTime(props.modified)}</p>
                <Button buttonText='Delete' />
            </div>
            <div className='note__detail'>

            </div>
        </article>
    );
}

export default Note;