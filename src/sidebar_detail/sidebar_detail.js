import React from 'react';
import Folder from '../folder/folder';
import ErrorBoundaryFolders from '../error_boundaries/error_boundary_folders';
import NotefulContext from '../NotefulContext';

class SidebarDetail extends React.Component {
    static defaultProps = {
        folders: [],
    }

    static contextType = NotefulContext;

    render() {
        let noteId = this.props.match.params.noteId;
        // noteId is a string and the database stores the note.id as a number
        // using == instead results in webpack complaining
        let note = this.context.notes.find(note => note.id === parseInt(noteId)) || {};
        let folder = this.context.folders.find(folder => folder.id === parseInt(note.folder_id)) || {};

        return (
            <ErrorBoundaryFolders>
                <nav className='sidebar'>
                    <h2 className='sidebar__heading'>Folder list:</h2>
                    <ul className='folder_list'>
                        <li>
                            <Folder id={folder.id} name={folder.folder_name} />
                        </li>
                    </ul>
                    <button className='sidebar__button' onClick={() => this.props.history.push('/')}>Go back</button>
                </nav>
            </ErrorBoundaryFolders>
        )
    }
}

export default SidebarDetail;
