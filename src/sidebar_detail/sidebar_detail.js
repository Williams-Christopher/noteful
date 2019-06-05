import React from 'react';
import Folder from '../folder/folder';
// import Button from '../button/button';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';

class SidebarDetail extends React.Component {
    static defaultProps = {
        folder: {},
    }

    static contextType = NotefulContext;
    
    selectedFolder = () => {
        let noteId = this.context.path.pathname.split('/')[2];
        let note = this.context.notes.find(n => n.id === noteId);
        let folder = this.context.folders.find(f => f.id === note.folderId);
        return folder;
    }

    render() {
        return(
            <nav className='sidebar'>
                <h2 className='sidebar__heading'>Folder list:</h2>
                <ul className='folder_list'>
                    <li>
                        <Folder id={this.selectedFolder().id} name={this.selectedFolder().name} /> 
                    </li>
                </ul>
                {/* I don't like how I'm doing this. Shouldn't this be a .push('/')?? */}
                <Link to={'/'}>
                    <button className='sidebar__button'>Go back</button>
                </Link>
            </nav>
        )
    }
}

export default SidebarDetail;
