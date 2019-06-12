import React from 'react';
import {NavLink} from 'react-router-dom';
import Note from '../note/note';
import Button from '../button/button';
import NotefulContext from '../NotefulContext';

class MainDetail extends React.Component {
    static defaultProps = {
        note: {},
    }

    static contextType = NotefulContext;

    handleDelete = () => {
        this.props.history.push('/');
    }

    render() {
        console.log(this.context);
        let noteId = this.props.match.params.noteId;
        let note = this.context.notes.find(n => n.id === noteId);

        return(
            <section className='main'>
                <h2 className='main__heading'>Note detail:</h2>
                <Note {...note} detailNote={true} onDelete={this.handleDelete}/>
                <NavLink to={'/addNote'}><button className='button__add_note'>Add note</button></NavLink>
            </section>
        )
    }
}

export default MainDetail;
