import React from 'react';
import Folder from '../folder/folder';
import './sidebar.css';

function Sidebar(props) {
    let display = props.match ? props.value.match.params.folderId : '';
    
    let folders = props.folders.map((f, i) => {
        return(
            <Folder name={f.name} id={f.id} />
        )
    })

    return (
        <section className='sidebar'>
            <h1>Sidebar placeholder</h1>
            <p>{display}</p>
            {folders}
            <button>Add Folder</button>
        </section>
    )
}

export default Sidebar;