import React from 'react';
import './folder.css';

function Folder(props) {
    return(
        <div className='folder' key={props.id}>
            <p className='folder__name' key={props.id}>{props.name}</p>
        </div>
    );
}

export default Folder;
