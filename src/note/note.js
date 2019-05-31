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
                        <h2>{props.name}</h2>
                    :
                        <Link to={'/note/' + props.id} className='note__link'>
                            <h2>{props.name}</h2>
                        </Link>
                }
                <p>Modified {convertDateTime(props.modified)}</p>
            </div>
            {props.detailNote ? 
                    <div className='note__detail'>
                        <p>{props.content}</p>
                    </div>
                :
                    ''
            }
            <Button buttonText='Delete' />
        </article>
    );
}

export default Note;