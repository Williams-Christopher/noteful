import React from 'react';
import Folder from '../folder/folder';
import { Link } from 'react-router-dom';
import ErrorBoundaryFolders from '../error_boundaries/error_boundary_folders';
import NotefulContext from '../NotefulContext';

class SidebarDetail extends React.Component {
    static defaultProps = {
        folders: [],
    }

    static contextType = NotefulContext;

    render() {
        let noteId = this.props.match.params.noteId;
        let note = this.context.notes.find(n => n.id === noteId) || {};
        let folder = this.context.folders.find(f => f.id === note.folderId) || {};

        return (
            <ErrorBoundaryFolders>
                <nav className='sidebar'>
                    <h2 className='sidebar__heading'>Folder list:</h2>
                    <ul className='folder_list'>
                        <li>
                            <Folder id={folder.id} name={folder.name} />
                        </li>
                    </ul>
                    {/* I don't like how I'm doing this. Shouldn't this be a .push('/')?? */}
                    <Link to={'/'}>
                        <button className='sidebar__button'>Go back</button>
                    </Link>
                </nav>
            </ErrorBoundaryFolders>
        )
    }
}

export default SidebarDetail;
