import React from 'react';
import {NavLink} from 'react-router-dom';
import Folder from '../folder/folder';
import Button from '../button/button';
import './sidebar.css';

function Sidebar(props) {
    let folders = props.folders.map((f, i) => {
        return(
            <li>
                <NavLink to={'/folder/' + f.id} className='folder__link'>
                    <Folder name={f.name} id={f.id} />
                </NavLink>
            </li>
        );
    });

    return (
        <nav className='sidebar'>
            <h2 className='sidebar__heading'>Folder list:</h2>
            <ul className='folder_list'>
                {folders}
                <Button buttonText='Add folder' />
            </ul>
        </nav>
    )
}

Sidebar.defaultProps={
    folders: [],
}

export default Sidebar;
