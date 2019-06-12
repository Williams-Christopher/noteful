import React from 'react';
import { NavLink } from 'react-router-dom';
import Note from '../note/note';
import ErrorBoundaryNotes from '../error_boundaries/error_boundary_notes';
import NotefulContext from '../NotefulContext';
import './main.css';

class Main extends React.Component {
    static contextType = NotefulContext;
    notesForRoute = () => {
        if (this.props.match.path === '/folder/:folderId') {
            return this.context.notes.filter(n => n.folderId === this.props.match.params.folderId);
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
                        <Note {...n} />
                    )}
                    <NavLink to={'/addNote'}><button className='button__add_note'>Add note</button></NavLink>
                </section>
            </ErrorBoundaryNotes>
        )
    }
}

export default Main;
