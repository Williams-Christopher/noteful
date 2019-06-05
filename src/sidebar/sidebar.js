import React from 'react';
import {NavLink} from 'react-router-dom';
import Folder from '../folder/folder';
// import Button from '../button/button';
import NotefulContext from '../NotefulContext';
import './sidebar.css';

function Sidebar(props) {
    return (
        <NotefulContext.Consumer>
            {(context) => {
                return(
                <nav className='sidebar'>
                    <h2 className='sidebar__heading'>Folder list:</h2>
                    <ul className='folder_list'>
                        {context.folders.map((f, i) => {
                            return(
                                <li>
                                    <NavLink to={'/folder/' + f.id} className='folder__link'>
                                        <Folder name={f.name} id={f.id} />
                                    </NavLink>
                                </li>
                            )
                        })
                        }
                        {/* <Button buttonText='Add folder' /> */}
                    </ul>
                    <button className='sidebar__button'>Add Folder</button>
                </nav>
                )}
            }
        </NotefulContext.Consumer>
    )
}

export default Sidebar;
