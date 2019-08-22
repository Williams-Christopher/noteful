import React from 'react';
import Note from '../note/note';
import ErrorBoundaryNotes from '../error_boundaries/error_boundary_notes';
import NotefulContext from '../NotefulContext';
import './main.css';

class Main extends React.Component {
    static contextType = NotefulContext;
    notesForRoute = () => {
        if (this.props.match.path === '/folder/:folderId') {
            return this.context.notes.filter(note => note.folder_id === parseInt(this.props.match.params.folderId));
        } else {
            return this.context.notes;
        }
    }

    render() {
        return (
            <ErrorBoundaryNotes>
                <section className='main'>
                    <h2 className='main__heading'>Notes:</h2>
                    {this.notesForRoute().map((n, i) =>
                        <Note {...n} key={n.id} />
                    )}
                    <button className='button__add_note' onClick={() => this.props.history.push('/addNote')}>Add note</button>
                </section>
            </ErrorBoundaryNotes>
        )
    }
}

export default Main;
