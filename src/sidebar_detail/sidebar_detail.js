import React from 'react';
import Folder from '../folder/folder';
import Button from '../button/button';
import NotefulContext from '../NotefulContext';

function SidebarDetail() {
    return (
        <NotefulContext.Consumer>
            {(context) => (
                <nav className='sidebar'>
                    <h2 className='sidebar__heading'>Folder list:</h2>
                    <ul className='folder_list'>
                        <li>
                            <Folder id={context.folder.id || {}} name={context.folder.name || {}} /> 
                        </li>
                    </ul>
                    <button className='sidebar__button'>Go back</button>
                </nav>
            )}
        </NotefulContext.Consumer>
    )
}

SidebarDetail.defaultProps={
    folder: {},
}

export default SidebarDetail;
