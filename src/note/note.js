import React from 'react';
import {Link} from 'react-router-dom';
// import Button from '../button/button';
import NotefulContext from '../NotefulContext';
import './note.css';

const url = 'http://localhost:9090';

function convertDateTime(utcDate = '01/01/1900'){
  return new Date(utcDate).toDateString();
}

class Note extends React.Component {
  static defaultProps = {
    onDelete: () => {},
  }

  static contextType = NotefulContext;

  handleDeleteNote (e, noteId, callback) {
    //e.preventDefault();
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
      console.log('Callback...');
      callback(noteId);
      this.props.onDelete();
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
              <button className='note__button' onClick={(e) => this.handleDeleteNote(e, this.props.id, this.context.deleteNote)}>Delete</button>
          </article>
      )
  }
}

export default Note;
