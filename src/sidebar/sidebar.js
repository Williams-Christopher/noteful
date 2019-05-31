import React from 'react';
import Folder from '../folder/folder';
import Button from '../button/button';
import './sidebar.css';

function Sidebar(props) {    
    let folders = props.folders.map((f, i) => {
        return(
            <Folder name={f.name} id={f.id} />
        )
    })

    return (
        <section className='sidebar'>
            <h1>Sidebar placeholder</h1>
            {folders}
            <Button buttonText='Add folder' />
        </section>
    )
}

export default Sidebar;