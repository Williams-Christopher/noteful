import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../button/button';
import './note.css';

function convertDateTime(utcDate){
    return new Date(utcDate).toDateString();
}

function Note(props) {
    return(
        <article className='note'>
            <div className='note__summary'>
                {props.detailNote ?
                        <h1>{props.name}</h1>
                    :
                        <Link to={'/note/' + props.id}>
                            <h1>{props.name}</h1>
                        </Link>
                }
                <p>Modified {convertDateTime(props.modified)}</p>
                <Button buttonText='Delete' />
            </div>
            {props.detailNote ? 
                    <div className='note__detail'>
                        <p>{props.content}</p>
                    </div>
                :
                    ''
            }
        </article>
    );
}

export default Note;