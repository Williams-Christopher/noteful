import React from 'react';
import Folder from '../folder/folder';
import Button from '../button/button';

function SidebarDetail(props) {
    return (
        <nav className='sidebar'>
            <h2 className='sidebar__heading'>Folder list:</h2>
            <ul className='folder_list'>
                <li>
                    <Folder id={props.folder.id} name={props.folder.name} /> 
                </li>
                <Button buttonText='Go back' />
            </ul>
        </nav>
    )
}

SidebarDetail.defaultProps={
    folder: {},
}

export default SidebarDetail;
