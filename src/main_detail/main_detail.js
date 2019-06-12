import React from 'react';
import Note from '../note/note';
import ErrorBoundaryNotes from '../error_boundaries/error_boundary_notes';
import NotefulContext from '../NotefulContext';

class MainDetail extends React.Component {
    static defaultProps = {
        note: {},
    }

    static contextType = NotefulContext;

    handleDelete = () => {
        this.props.history.push('/');
    }

    render() {
        let noteId = this.props.match.params.noteId;
        let note = this.context.notes.find(n => n.id === noteId);

        return (
            <ErrorBoundaryNotes>
                <section className='main'>
                    <h2 className='main__heading'>Note detail:</h2>
                    <Note {...note} detailNote={true} onDelete={this.handleDelete} />
                    <button className='button__add_note' onClick={() => this.props.history.push('/addNote')}>Add note</button>
                </section>
            </ErrorBoundaryNotes>
        )
    }
}

export default MainDetail;
