import React from 'react';
import {NavLink} from 'react-router-dom';
import Folder from '../folder/folder';
import Button from '../button/button';
import './sidebar.css';

function Sidebar(props) {
    console.log('Sidebar');
    let folders = props.folders.map((f, i) => {
        return(
            <li>
                <NavLink to={'/folder/' + f.id}>
                    <Folder name={f.name} id={f.id} />
                </NavLink>
            </li>
        );
    });

    return (
        <nav className='sidebar'>
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