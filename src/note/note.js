import React from 'react';
import {Link} from 'react-router-dom';
// import Button from '../button/button';
import NotefulContext from '../NotefulContext';
import './note.css';

const url = 'http://localhost:9090';

function convertDateTime(utcDate){
    return new Date(utcDate).toDateString();
}



class Note extends React.Component {
    static contextType = NotefulContext;

    handleDeleteNote (noteId, callback) {
        console.log('Request to delete note with id ', noteId);
        fetch(url + '/notes/' + noteId, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
          }
        })
        .then(response => {
          if(!response.ok) {
            throw new Error('Delete unsucccessful')
          }
          return response.json()
        })
        .then(data => {
          console.log('noteId, callback: ', noteId, callback)
          callback(noteId);
          console.log(this.props)
          this.props.history.push('/');
        })
        .catch(e => console.log(e))
      }

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
                <button className='note__button' onClick={() => this.handleDeleteNote(this.props.id, this.context.deleteNote)}>Delete</button>
            </article>
        )
    }
}

export default Note;
