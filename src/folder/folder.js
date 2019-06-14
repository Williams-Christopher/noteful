import React from 'react';
import PropTypes from 'prop-types';
import './folder.css';

function Folder(props) {
    return(
        <div className='folder' role='button'>
            <p className='folder__name' key={props.id}>{props.name}</p>
        </div>
    );
}

Folder.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
}

export default Folder;
