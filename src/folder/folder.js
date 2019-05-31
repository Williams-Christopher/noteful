import React from 'react';
import './folder.css';

function Folder(props) {
    return(
        <section className='folder' key={props.id}>
        <p className='folder__name'>{props.name}</p>
    </section>
    );
}

export default Folder;