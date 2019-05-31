import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../button/button';
import './sidebar.css';

function SidebarDetail(props) {
    console.log('SidebarDetail');
    return (
        <nav className='sidebar'>
            <ul className='folder_list'>
                <li>
                    {props.folderName}
                </li>
                <Button buttonText='Go back' />
            </ul>
        </nav>
    )
}

SidebarDetail.defaultProps={
    folderName: null,
}

export default SidebarDetail;