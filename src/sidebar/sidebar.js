import React from 'react';
import { NavLink } from 'react-router-dom';
import Folder from '../folder/folder';
import ErrorBoundaryFolders from '../error_boundaries/error_boundary_folders';
import NotefulContext from '../NotefulContext';
import './sidebar.css';

function Sidebar(props) {
    return (
        <NotefulContext.Consumer>
            {(context) => {
                return (
                    <ErrorBoundaryFolders>
                        <nav className='sidebar' role='navigation' aria-label='Menu'>
                            <h2 className='sidebar__heading'>Folder list:</h2>
                            <ul className='folder_list'>
                                {context.folders.map((folder, i) => {
                                    return (
                                        <li key={folder.id}>
                                            <NavLink to={'/folder/' + folder.id} className='folder__link'>
                                                <Folder name={folder.folder_name} id={folder.id} />
                                            </NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                            <button className='sidebar__button' onClick={() => props.history.push('/addFolder')}>Add Folder</button>
                        </nav>
                    </ErrorBoundaryFolders>
                )
            }}
        </NotefulContext.Consumer>
    )
}

export default Sidebar;
