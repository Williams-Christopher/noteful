import React from 'react';
import Folder from '../folder/folder';
import Button from '../button/button';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';

function SidebarDetail(props) {
    return (
        <NotefulContext.Consumer>
            {(context) => (
                console.log(context),
                <nav className='sidebar'>
                    <h2 className='sidebar__heading'>Folder list:</h2>
                    <ul className='folder_list'>
                        <li>
                            <Folder id={context.folder ? context.folder.id : {}} name={context.folder ? context.folder.name : {}} /> 
                        </li>
                    </ul>
                    {/* I don't like how I'm doing this. Shouldn't this be a .push('/')?? */}
                    <Link to={'/'}>
                        <button className='sidebar__button'>Go back</button>
                    </Link>
                </nav>
            )}
        </NotefulContext.Consumer>
    )
}

SidebarDetail.defaultProps={
    folder: {},
}

export default SidebarDetail;
