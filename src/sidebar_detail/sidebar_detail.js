import React from 'react';
import Button from '../button/button';
import './sidebar_detail.css';

function SidebarDetail(props) {
    console.log('SidebarDetail');
    console.log(props);
    return (
        <nav className='sidebar'>
            <ul className='folder_list'>
                <li>
                    {props.folder.name}
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