import React from 'react';
import {Link} from 'react-router-dom';
// import Button from '../button/button';
import NotefulContext from '../NotefulContext';
import './note.css';

function convertDateTime(utcDate){
    return new Date(utcDate).toDateString();
}

class Note extends React.Component {
    static context = NotefulContext;
    render() {
        return(
            <article className='note'>
                <div className='note__summary'>
                    {this.props.detailNote ?
                            <h2>{this.props.name}</h2>
                        :
                            <Link to={'/note/' + this.props.id} className='note__link'>
                                <h2>{this.props.name}</h2>
                            </Link>
                    }
                    <p>Modified {convertDateTime(this.props.modified)}</p>
                </div>
                {this.props.detailNote ? 
                        <div className='note__detail'>
                            <p>{this.props.content}</p>
                        </div>
                    :
                        ''
                }
                {/* <Button buttonText='Delete' /> */}
                <button className='note__button' onClick={() => this.context.deleteNote(this.props.id)}>Delete</button>
            </article>
        )
    }
}

export default Note;
